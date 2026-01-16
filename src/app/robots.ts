import { MetadataRoute } from 'next';

/**
 * Robots.txt configuration
 * Controls search engine crawler access to site pages
 * 
 * - Allow all crawlers to access all pages
 * - Point to sitemap for efficient crawling
 * - Disallow access to purchase success page (contains sensitive info)
 * - Disallow access to API routes (not meant for indexing)
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/purchase/success',  // Don't index transaction confirmation pages
          '/api/',              // Don't index API routes
          '/_next/',            // Don't index Next.js internal routes
        ],
      },
    ],
    sitemap: 'https://dcfinsurance.com/sitemap.xml',
  };
}
