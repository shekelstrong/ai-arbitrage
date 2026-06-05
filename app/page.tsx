import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroSVG } from '@/components/HeroSVG';

export const metadata: Metadata = {
  title: 'AI Arbitrage — Заработок на AI и партнёрках',
  description: 'Обучение, инструменты и обзоры продуктов для заработка на AI-арбитраже и партнёрских программах.',
  alternates: {
    canonical: 'https://ai-arbitrage.ru/',
  },
  openGraph: {
    title: 'AI Arbitrage — Заработок на AI и партнёрках',
    description: 'Обучение, инструменты и обзоры продуктов для заработка на AI-арбитраже.',
    url: 'https://ai-arbitrage.ru/',
    siteName: 'AI Arbitrage',
    locale: 'ru_RU',
    type: 'website',
    images: ['/images/og-home.svg'],
  },
};

const benefits = [
  {
    title: 'AI-генерация контента',
    text: 'Создавайте продающие тексты, креативы и лендинги за минуты с помощью нейросетей.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="32" height="24" rx="4" stroke="#66FCF1" strokeWidth="2" />
        <path d="M12 20H28" stroke="#66FCF1" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 14L24 20L18 26" stroke="#66FCF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Автоматизация процессов',
    text: 'Интегрируйте AI в рекламные кабинеты, парсеры и аналитику для экономии времени.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="14" stroke="#66FCF1" strokeWidth="2" />
        <path d="M20 10V20L26 26" stroke="#66FCF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Актуальные обзоры',
    text: 'Тестируем и сравниваем AI-инструменты, чтобы вы выбирали только лучшее.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="4" width="28" height="32" rx="4" stroke="#66FCF1" strokeWidth="2" />
        <rect x="12" y="12" width="16" height="4" rx="2" fill="#66FCF1" />
        <rect x="12" y="20" width="10" height="4" rx="2" fill="#45A29E" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: 'Алексей',
    role: 'Арбитражник',
    text: 'С помощью ChatGPT я сократил время написания объявлений с 2 часов до 20 минут. ROI вырос на 35%.',
  },
  {
    name: 'Марина',
    role: 'SMM-специалист',
    text: 'Midjourney изменил мой подход к креативам. Теперь я не плачу за дизайнера — всё делаю сама.',
  },
  {
    name: 'Дмитрий',
    role: 'SEO-арбитражник',
    text: 'Surfer SEO + ChatGPT = идеальное сочетание для массового создания оптимизированного контента.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Зарабатывайте на
                <span className="gradient-text"> AI и партнёрках</span>
              </h1>
              <p className="text-lg text-accent/80 mb-8 max-w-xl">
                Обучение, инструменты и обзоры для заработка на AI-арбитраже.
                Автоматизируйте процессы и увеличивайте прибыль с помощью нейросетей.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/articles/" className="btn-primary">
                  Начать обучение
                </Link>
                <Link href="/products/" className="btn-secondary">
                  Обзоры инструментов
                </Link>
              </div>
            </div>
            <div className="relative">
              <HeroSVG />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Почему AI Arbitrage?</h2>
            <p className="text-accent/70 max-w-2xl mx-auto">
              Мы собрали лучшие практики, инструменты и кейсы для заработка на AI и партнёрских программах.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="card">
                <div className="mb-4">{b.icon}</div>
                <h3 className="text-xl font-bold mb-2">{b.title}</h3>
                <p className="text-accent/70">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Отзывы</h2>
            <p className="text-accent/70 max-w-2xl mx-auto">
              Что говорят наши читатели о применении AI в арбитраже трафика.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="card">
                <p className="text-accent/80 mb-4 italic">«{t.text}»</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.name}</div>
                    <div className="text-xs text-accent/50">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-accent/70 mb-8">
            Присоединяйтесь к Telegram-каналу и получайте актуальные материалы по заработку на AI.
          </p>
          <a
            href="https://t.me/python_developer_telegram"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Перейти в Telegram
          </a>
        </div>
      </section>
    </>
  );
}
