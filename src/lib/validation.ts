/**
 * Input Validation Utilities
 * 
 * Sanitization and validation functions to prevent XSS and injection attacks.
 * Always validate and sanitize user input before processing.
 */

/**
 * Sanitize string input to prevent XSS attacks
 * Removes potentially dangerous HTML tags and scripts
 * 
 * @param input - Raw user input
 * @returns Sanitized string
 */
export function sanitizeString(input: string): string {
  if (!input) return '';

  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim();
}

/**
 * Validate email address format
 * 
 * @param email - Email address to validate
 * @returns True if valid email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

/**
 * Validate phone number format
 * Supports international formats
 * 
 * @param phone - Phone number to validate
 * @returns True if valid phone format
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s\-()]{10,}$/;
  return phoneRegex.test(phone);
}

/**
 * Sanitize and validate URL
 * Ensures URL is safe and properly formatted
 * 
 * @param url - URL to validate
 * @returns Sanitized URL or null if invalid
 */
export function sanitizeUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    
    // Only allow http and https protocols
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      return null;
    }
    
    return parsed.toString();
  } catch {
    return null;
  }
}

/**
 * Escape HTML special characters
 * Prevents XSS when displaying user content
 * 
 * @param text - Text to escape
 * @returns Escaped text
 */
export function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };

  return text.replace(/[&<>"'/]/g, (char) => map[char]);
}

/**
 * Validate string length
 * Prevents buffer overflow attacks
 * 
 * @param input - Input string
 * @param minLength - Minimum allowed length
 * @param maxLength - Maximum allowed length
 * @returns True if length is valid
 */
export function isValidLength(
  input: string,
  minLength: number,
  maxLength: number
): boolean {
  const length = input.trim().length;
  return length >= minLength && length <= maxLength;
}

/**
 * Remove special characters from string
 * Useful for usernames and IDs
 * 
 * @param input - Input string
 * @returns Alphanumeric string
 */
export function alphanumericOnly(input: string): string {
  return input.replace(/[^a-zA-Z0-9]/g, '');
}

/**
 * Check if string contains SQL injection patterns
 * Basic SQL injection detection
 * 
 * @param input - Input to check
 * @returns True if potentially malicious
 */
export function containsSqlInjection(input: string): boolean {
  const sqlPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE|UNION)\b)/gi,
    /(--|;|\/\*|\*\/)/g,
    /(\bOR\b.*=.*)/gi,
    /(\bAND\b.*=.*)/gi,
  ];

  return sqlPatterns.some(pattern => pattern.test(input));
}

/**
 * Rate limiting check
 * Simple in-memory rate limiter for client-side
 * 
 * @param key - Unique identifier (e.g., user ID, IP)
 * @param limit - Max requests allowed
 * @param windowMs - Time window in milliseconds
 * @returns True if rate limit exceeded
 */
const rateLimitStore = new Map<string, number[]>();

export function isRateLimited(
  key: string,
  limit: number,
  windowMs: number
): boolean {
  const now = Date.now();
  const timestamps = rateLimitStore.get(key) || [];
  
  // Remove old timestamps outside the window
  const validTimestamps = timestamps.filter(time => now - time < windowMs);
  
  if (validTimestamps.length >= limit) {
    return true;
  }
  
  validTimestamps.push(now);
  rateLimitStore.set(key, validTimestamps);
  
  return false;
}
