import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog';
import { SITE_URL } from './robots';

const STATIC_PATHS = ['/', '/about', '/services', '/blog', '/careers', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...STATIC_PATHS.map((path): MetadataRoute.Sitemap[number] => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: path === '/blog' ? 'weekly' : 'monthly',
      priority: path === '/' ? 1 : 0.7,
    })),
    ...blogPosts.map((post): MetadataRoute.Sitemap[number] => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    })),
  ];
}
