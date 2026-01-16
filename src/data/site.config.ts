/**
 * Site Configuration
 * 
 * Global configuration for the DCF Insurance Solutions website.
 * Contains metadata, SEO settings, and branding information used throughout the site.
 * 
 * @module data/site.config
 */

import { SiteConfig } from "@/types";

/**
 * Main site configuration object
 * Used for metadata, SEO, and branding across all pages
 */
export const siteConfig: SiteConfig = {
  /** Site name used in titles and metadata */
  name: "DCF Insurance Solutions",
  
  /** Short description for SEO and social media */
  description: "Enterprise insurance platforms for global markets. Trusted by leading insurers worldwide.",
  
  /** Primary website URL - update with production domain */
  url: "https://dcf-insurance.com",
  
  /** Open Graph image for social media sharing */
  ogImage: "/images/hero-image.jpg",
  
  /** Social media and external links */
  links: {
    linkedin: "https://linkedin.com/company/dcf",
  },
};
