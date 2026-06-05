import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О проекте — AI Arbitrage',
  description: 'AI Arbitrage — проект для русскоязычной аудитории про заработок на AI и партнёрских программах.',
  alternates: {
    canonical: 'https://ai-arbitrage.ru/about/',
  },
  openGraph: {
    title: 'О проекте — AI Arbitrage',
    description: 'AI Arbitrage — проект для русскоязычной аудитории про заработок на AI и партнёрских программах.',
    url: 'https://ai-arbitrage.ru/about/',
    siteName: 'AI Arbitrage',
    locale: 'ru_RU',
    type: 'website',
    images: ['/images/og-home.svg'],
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">О проекте</h1>

      <p className="text-accent/80 mb-6">
        <strong className="text-white">AI Arbitrage</strong> — это образовательный проект для русскоязычной аудитории,
        посвящённый заработку на AI-технологиях и партнёрских программах.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Наша миссия</h2>
      <p className="text-accent/80 mb-6">
        Мы делаем AI доступным инструментом для арбитражников, маркетологов и предпринимателей.
        Наша цель — помочь вам автоматизировать рутину, сократить расходы и увеличить прибыль
        с помощью современных нейросетей.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Что мы делаем</h2>
      <ul className="space-y-3 text-accent/80 mb-8">
        <li className="flex items-start gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#66FCF1" strokeWidth="2" className="mt-1 shrink-0">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Публикуем практические статьи и гайды по AI-арбитражу.
        </li>
        <li className="flex items-start gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#66FCF1" strokeWidth="2" className="mt-1 shrink-0">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Тестируем и обозреваем AI-инструменты для арбитража трафика.
        </li>
        <li className="flex items-start gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#66FCF1" strokeWidth="2" className="mt-1 shrink-0">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Делимся кейсами, промптами и шаблонами для автоматизации.
        </li>
        <li className="flex items-start gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#66FCF1" strokeWidth="2" className="mt-1 shrink-0">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Ведём Telegram-канал с актуальными новостями и разборами.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Контакты</h2>
      <p className="text-accent/80 mb-4">
        Если у вас есть вопросы, предложения или идеи для сотрудничества — напишите нам в Telegram:
      </p>
      <a
        href="https://t.me/python_developer_telegram"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
      >
        Написать в Telegram
      </a>
    </div>
  );
}
