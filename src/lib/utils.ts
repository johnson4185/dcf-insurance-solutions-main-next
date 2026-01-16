/**
 * Utility Functions
 * 
 * Common utility functions used throughout the application.
 * Primary function is cn() for conditional className composition.
 * 
 * @module lib/utils
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with proper precedence
 * 
 * Combines clsx for conditional classes and tailwind-merge to handle
 * conflicting Tailwind classes correctly. Later classes override earlier ones.
 * 
 * @example
 * cn("px-2 py-1", condition && "px-4") // Later px-4 overrides px-2 when condition is true
 * 
 * @param inputs - Class values to merge (strings, objects, arrays)
 * @returns Merged className string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
