import type { Metadata } from 'next';
import Link from 'next/link';
import { articles } from '@/data/articles';

export const metadata: Metadata = {
  title: 'Блог — AI Arbitrage',
  description: 'Статьи про заработок на AI, арбитраж трафика, инструменты и кейсы.',
  alternates: {
    canonical: 'https://ai-arbitrage.ru/articles/',
  },
  openGraph: {
    title: 'Блог — AI Arbitrage',
    description: 'Статьи про заработок на AI, арбитраж трафика, инструменты и кейсы.',
    url: 'https://ai-arbitrage.ru/articles/',
    siteName: 'AI Arbitrage',
    locale: 'ru_RU',
    type: 'website',
    images: ['/images/og-articles.svg'],
  },
};

export default function ArticlesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Блог</h1>
        <p className="text-accent/70 max-w-2xl mx-auto">
          Полезные статьи про AI-арбитраж, инструменты, трафик и заработок на партнёрках.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}/`}
            className="card group"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">
                {article.category}
              </span>
              <span className="text-xs text-accent/50">{article.readingTime}</span>
            </div>
            <h2 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition">
              {article.title}
            </h2>
            <p className="text-sm text-accent/70 mb-4">{article.excerpt}</p>
            <div className="text-xs text-accent/40">{article.date}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
