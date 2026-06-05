import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="14" stroke="#66FCF1" strokeWidth="2" />
                <path d="M10 16L14 20L22 12" stroke="#66FCF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-lg font-bold text-white">AI Arbitrage</span>
            </div>
            <p className="text-sm text-accent/70">
              Обучение, инструменты и обзоры для заработка на AI и партнёрских программах.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-accent/70 hover:text-primary transition">Главная</Link></li>
              <li><Link href="/articles/" className="text-sm text-accent/70 hover:text-primary transition">Блог</Link></li>
              <li><Link href="/products/" className="text-sm text-accent/70 hover:text-primary transition">Продукты</Link></li>
              <li><Link href="/about/" className="text-sm text-accent/70 hover:text-primary transition">О проекте</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://t.me/python_developer_telegram" target="_blank" rel="noopener noreferrer" className="text-sm text-accent/70 hover:text-primary transition inline-flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Telegram-канал
                </a>
              </li>
              <li className="text-sm text-accent/70">Email: hello@ai-arbitrage.ru</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-accent/40">
          © 2024 AI Arbitrage. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
