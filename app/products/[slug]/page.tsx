import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';

interface ProductPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return {};

  return {
    title: `${product.name} — обзор — AI Arbitrage`,
    description: product.description,
    alternates: {
      canonical: `https://ai-arbitrage.ru/products/${product.slug}/`,
    },
    openGraph: {
      title: `${product.name} — обзор — AI Arbitrage`,
      description: product.description,
      url: `https://ai-arbitrage.ru/products/${product.slug}/`,
      siteName: 'AI Arbitrage',
      locale: 'ru_RU',
      type: 'website',
      images: ['/images/og-products.svg'],
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-2">
        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">
          {product.category}
        </span>
      </div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl sm:text-4xl font-bold">{product.name}</h1>
        <span className="text-xl font-bold text-primary">{product.price}</span>
      </div>
      <div className="text-sm text-accent/50 mb-8">
        Рейтинг: <span className="text-primary font-semibold">★ {product.rating}</span> / 5
      </div>

      <p className="text-accent/80 mb-8">{product.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="card">
          <h2 className="text-lg font-bold mb-4">Возможности</h2>
          <ul className="space-y-2">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-accent/80">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#66FCF1" strokeWidth="2" className="mt-0.5 shrink-0">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="card border-green-500/20">
            <h2 className="text-lg font-bold mb-3 text-green-400">Плюсы</h2>
            <ul className="space-y-2">
              {product.pros.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-accent/80">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" className="mt-0.5 shrink-0">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="card border-red-500/20">
            <h2 className="text-lg font-bold mb-3 text-red-400">Минусы</h2>
            <ul className="space-y-2">
              {product.cons.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-accent/80">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" className="mt-0.5 shrink-0">
                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="card bg-primary/5 border-primary/20">
        <h2 className="text-lg font-bold mb-2">Вердикт</h2>
        <p className="text-accent/80">{product.verdict}</p>
      </div>
    </div>
  );
}
