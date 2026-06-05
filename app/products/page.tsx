import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Продукты — AI Arbitrage',
  description: 'Обзоры AI-инструментов, сервисов и программ для арбитража трафика и заработка.',
  alternates: {
    canonical: 'https://ai-arbitrage.ru/products/',
  },
  openGraph: {
    title: 'Продукты — AI Arbitrage',
    description: 'Обзоры AI-инструментов, сервисов и программ для арбитража трафика.',
    url: 'https://ai-arbitrage.ru/products/',
    siteName: 'AI Arbitrage',
    locale: 'ru_RU',
    type: 'website',
    images: ['/images/og-products.svg'],
  },
};

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Продукты и инструменты</h1>
        <p className="text-accent/70 max-w-2xl mx-auto">
          Обзоры, рейтинги и сравнения AI-сервисов для арбитража, SEO, генерации контента и аналитики.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}/`}
            className="card group flex flex-col"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">
                {product.category}
              </span>
              <span className="text-sm text-accent/70">
                ★ {product.rating}
              </span>
            </div>
            <h2 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition">
              {product.name}
            </h2>
            <p className="text-sm text-accent/70 mb-4 flex-1">{product.description}</p>
            <div className="text-sm font-semibold text-primary">{product.price}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
