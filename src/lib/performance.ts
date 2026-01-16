/**
 * Performance Utilities
 * 
 * Helper functions for optimizing application performance.
 * Includes lazy loading, memoization, and debouncing utilities.
 */

import { useEffect, useRef, useCallback, useState } from 'react';

/**
 * Debounce function to limit the rate of function execution
 * Useful for search inputs, resize handlers, scroll events
 * 
 * @param func - Function to debounce
 * @param wait - Delay in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to ensure function executes at most once per interval
 * Useful for scroll handlers and resize events
 * 
 * @param func - Function to throttle
 * @param limit - Time limit in milliseconds
 * @returns Throttled function
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Custom hook for lazy loading images when they enter viewport
 * Improves initial page load by deferring off-screen images
 */
export function useLazyLoad(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

/**
 * Memoized callback that persists between renders
 * Prevents unnecessary re-renders of child components
 */
export function useStableCallback<T extends (...args: unknown[]) => unknown>(
  callback: T
): T {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  return useCallback((...args: Parameters<T>) => {
    return callbackRef.current(...args);
  }, []) as T;
}

/**
 * Preload critical resources for faster page transitions
 * 
 * @param urls - Array of resource URLs to preload
 */
export function preloadResources(urls: string[]): void {
  if (typeof window === 'undefined') return;

  urls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    
    if (url.endsWith('.woff') || url.endsWith('.woff2')) {
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
    } else if (url.match(/\.(jpg|jpeg|png|webp|avif)$/)) {
      link.as = 'image';
    } else if (url.endsWith('.css')) {
      link.as = 'style';
    } else if (url.endsWith('.js')) {
      link.as = 'script';
    }

    link.href = url;
    document.head.appendChild(link);
  });
}

/**
 * Measure and log performance metrics
 * Helps identify performance bottlenecks in production
 */
export function measurePerformance(metricName: string): () => void {
  const startTime = performance.now();

  return () => {
    const duration = performance.now() - startTime;
    
    // Only log in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${metricName}: ${duration.toFixed(2)}ms`);
    }
  };
}

/**
 * Check if user prefers reduced motion
 * Respect accessibility preferences
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
