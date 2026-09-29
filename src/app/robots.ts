import type { MetadataRoute } from 'next';

// Kept in sync with `metadataBase` in app/layout.tsx.
export const SITE_URL = 'https://luxedry.in';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/private/'] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
