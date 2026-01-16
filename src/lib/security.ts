/**
 * Security Configuration
 * 
 * Centralized security settings and best practices for the application.
 * This file documents security measures implemented across the project.
 */

export const securityConfig = {
  /**
   * Content Security Policy
   * Prevents XSS attacks by controlling which resources can be loaded
   */
  csp: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      fontSrc: ["'self'", "data:"],
      connectSrc: ["'self'"],
      frameSrc: ["'none'"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  },

  /**
   * Rate Limiting Configuration
   * Prevents brute force and DDoS attacks
   */
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Max requests per window
  },

  /**
   * Input Validation Rules
   * Sanitize and validate all user inputs
   */
  validation: {
    maxEmailLength: 254,
    maxNameLength: 100,
    maxMessageLength: 5000,
  },

  /**
   * Session Configuration
   * Secure session management
   */
  session: {
    cookieName: 'dcf_session',
    maxAge: 24 * 60 * 60, // 24 hours
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'strict' as const,
  },
} as const;

/**
 * Security Headers
 * Additional headers for enhanced security
 */
export const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
] as const;
