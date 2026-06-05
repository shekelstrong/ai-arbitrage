import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';

interface ArticlePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: `${article.title} — AI Arbitrage`,
    description: article.excerpt,
    alternates: {
      canonical: `https://ai-arbitrage.ru/articles/${article.slug}/`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://ai-arbitrage.ru/articles/${article.slug}/`,
      siteName: 'AI Arbitrage',
      locale: 'ru_RU',
      type: 'article',
      publishedTime: article.date,
      authors: ['AI Arbitrage'],
      images: ['/images/og-articles.svg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: ['/images/og-articles.svg'],
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.excerpt,
            datePublished: article.date,
            dateModified: article.date,
            author: {
              '@type': 'Organization',
              name: 'AI Arbitrage',
              url: 'https://ai-arbitrage.ru',
            },
            publisher: {
              '@type': 'Organization',
              name: 'AI Arbitrage',
              logo: {
                '@type': 'ImageObject',
                url: 'https://ai-arbitrage.ru/favicon.svg',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://ai-arbitrage.ru/articles/${article.slug}/`,
            },
          }),
        }}
      />

      <div className="mb-2">
        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">
          {article.category}
        </span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">{article.title}</h1>
      <div className="flex items-center gap-4 text-sm text-accent/50 mb-10">
        <span>{article.date}</span>
        <span>•</span>
        <span>{article.readingTime}</span>
      </div>

      <article
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
}
