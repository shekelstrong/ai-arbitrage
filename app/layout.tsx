import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'AI Arbitrage — Заработок на AI и партнёрках',
  description: 'Обучение, инструменты и обзоры продуктов для заработка на AI-арбитраже и партнёрских программах.',
  metadataBase: new URL('https://ai-arbitrage.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AI Arbitrage — Заработок на AI и партнёрках',
    description: 'Обучение, инструменты и обзоры продуктов для заработка на AI-арбитраже и партнёрских программах.',
    url: 'https://ai-arbitrage.ru',
    siteName: 'AI Arbitrage',
    locale: 'ru_RU',
    type: 'website',
    images: ['/images/og-home.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Arbitrage',
    description: 'Заработок на AI и партнёрках',
    images: ['/images/og-home.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    yandex: 'yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
