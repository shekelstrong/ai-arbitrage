import { articles } from '@/data/articles';
import { products } from '@/data/products';

export async function GET() {
  const baseUrl = 'https://ai-arbitrage.ru';

  const pages = [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString(), priority: 1.0 },
    { url: `${baseUrl}/articles/`, lastModified: new Date().toISOString(), priority: 0.9 },
    ...articles.map((a) => ({
      url: `${baseUrl}/articles/${a.slug}/`,
      lastModified: a.date,
      priority: 0.8,
    })),
    { url: `${baseUrl}/products/`, lastModified: new Date().toISOString(), priority: 0.9 },
    ...products.map((p) => ({
      url: `${baseUrl}/products/${p.slug}/`,
      lastModified: new Date().toISOString(),
      priority: 0.8,
    })),
    { url: `${baseUrl}/about/`, lastModified: new Date().toISOString(), priority: 0.7 },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
