/**
 * API Rate Limiting Middleware
 * 
 * Protects API routes from abuse by limiting request rates per IP address.
 * Can be applied to any API route for DDoS protection.
 * 
 * Usage in API routes:
 * import { withRateLimit } from '@/lib/rateLimit';
 * export const POST = withRateLimit(async (request) => { ... });
 */

import { NextRequest, NextResponse } from 'next/server';

interface RateLimitStore {
  count: number;
  resetTime: number;
}

// Simple in-memory store (use Redis in production for distributed systems)
const rateLimitMap = new Map<string, RateLimitStore>();

/**
 * Configuration for rate limiting
 */
interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

const defaultConfig: RateLimitConfig = {
  maxRequests: 100, // Maximum requests per window
  windowMs: 15 * 60 * 1000, // 15 minutes
};

/**
 * Get client IP address from request
 * Handles proxies and various hosting environments
 */
function getClientIp(request: NextRequest): string {
  // Check various headers that might contain the real IP
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip'); // Cloudflare
  
  if (forwarded) {
    // x-forwarded-for may contain multiple IPs, take the first one
    return forwarded.split(',')[0].trim();
  }
  
  if (realIp) {
    return realIp;
  }
  
  if (cfConnectingIp) {
    return cfConnectingIp;
  }
  
  // Fallback to a default if we can't determine IP
  return 'unknown';
}

/**
 * Clean up expired entries from the rate limit store
 * Call periodically to prevent memory leaks
 */
function cleanupExpiredEntries(): void {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}

// Schedule cleanup every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(cleanupExpiredEntries, 5 * 60 * 1000);
}

/**
 * Check if request is rate limited
 * Returns true if limit exceeded
 */
export function isRateLimited(
  clientId: string,
  config: RateLimitConfig = defaultConfig
): { limited: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(clientId);

  // No existing entry or window expired - create new entry
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(clientId, {
      count: 1,
      resetTime: now + config.windowMs,
    });
    
    return {
      limited: false,
      remaining: config.maxRequests - 1,
      resetTime: now + config.windowMs,
    };
  }

  // Increment count
  entry.count += 1;

  // Check if limit exceeded
  if (entry.count > config.maxRequests) {
    return {
      limited: true,
      remaining: 0,
      resetTime: entry.resetTime,
    };
  }

  return {
    limited: false,
    remaining: config.maxRequests - entry.count,
    resetTime: entry.resetTime,
  };
}

/**
 * Higher-order function to wrap API routes with rate limiting
 * 
 * @example
 * export const POST = withRateLimit(async (request) => {
 *   // Your API logic here
 *   return NextResponse.json({ success: true });
 * });
 */
export function withRateLimit(
  handler: (request: NextRequest) => Promise<NextResponse>,
  config?: Partial<RateLimitConfig>
) {
  return async (request: NextRequest): Promise<NextResponse> => {
    const clientIp = getClientIp(request);
    const rateLimitConfig = { ...defaultConfig, ...config };
    
    const { limited, remaining, resetTime } = isRateLimited(
      clientIp,
      rateLimitConfig
    );

    // Add rate limit headers to all responses
    const headers = {
      'X-RateLimit-Limit': rateLimitConfig.maxRequests.toString(),
      'X-RateLimit-Remaining': remaining.toString(),
      'X-RateLimit-Reset': new Date(resetTime).toISOString(),
    };

    if (limited) {
      // Return 429 Too Many Requests
      return new NextResponse(
        JSON.stringify({
          error: 'Too many requests',
          message: 'Please try again later',
          retryAfter: new Date(resetTime).toISOString(),
        }),
        {
          status: 429,
          headers: {
            ...headers,
            'Content-Type': 'application/json',
            'Retry-After': Math.ceil((resetTime - Date.now()) / 1000).toString(),
          },
        }
      );
    }

    // Execute the actual handler
    const response = await handler(request);
    
    // Add rate limit headers to successful response
    Object.entries(headers).forEach(([key, value]) => {
      response.headers.set(key, value);
    });

    return response;
  };
}
