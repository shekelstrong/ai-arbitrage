export interface Product {
  slug: string;
  name: string;
  category: string;
  rating: number;
  price: string;
  description: string;
  features: string[];
  pros: string[];
  cons: string[];
  verdict: string;
}

export const products: Product[] = [
  {
    slug: 'chatgpt-plus',
    name: 'ChatGPT Plus',
    category: 'Нейросеть',
    rating: 4.8,
    price: '20 $/мес',
    description: 'Подписка на GPT-4o с повышенными лимитами, доступом к плагинам и Code Interpreter.',
    features: ['GPT-4o и GPT-4', 'DALL-E 3', 'Code Interpreter', 'Custom GPTs', 'Расширенные лимиты'],
    pros: ['Универсальность', 'Высокое качество текстов', 'Интеграции'],
    cons: ['Ограничения по токенам', 'Нет прямого доступа к интернету в реальном времени'],
    verdict: 'Маст-хэв для любого арбитражника. Используем для текстов, идей, аналитики и автоматизации.',
  },
  {
    slug: 'midjourney',
    name: 'Midjourney',
    category: 'Генерация изображений',
    rating: 4.7,
    price: '10 $/мес',
    description: 'Лучшая нейросеть для создания фотореалистичных и художественных креативов.',
    features: ['Высокое разрешение', 'Стильные пресеты', 'Inpainting', 'Pan и Zoom'],
    pros: ['Качество картинок', 'Быстрая генерация', 'Активное комьюнити'],
    cons: ['Только Discord-интерфейс', 'Цензура на некоторые темы'],
    verdict: 'Идеально для нутры, гемблинга и Dating-вертикали. Креативы выглядят живыми.',
  },
  {
    slug: 'surferseo',
    name: 'Surfer SEO',
    category: 'SEO',
    rating: 4.5,
    price: '69 $/мес',
    description: 'Инструмент для SEO-оптимизации контента на основе данных топ-10 выдачи.',
    features: ['Content Editor', 'SERP Analyzer', 'Keyword Research', 'Audit'],
    pros: ['Точные рекомендации', 'Интеграция с Jasper', 'Визуальный интерфейс'],
    cons: ['Высокая цена', 'Требует доработки текстов вручную'],
    verdict: 'Отлично подходит для SEO-арбитража и создания дорвеев под Яндекс.',
  },
  {
    slug: 'notion-ai',
    name: 'Notion AI',
    category: 'Продуктивность',
    rating: 4.4,
    price: '10 $/мес',
    description: 'Встроенный AI-ассистент в Notion для написания, редактирования и анализа заметок.',
    features: ['Генерация текста', 'Резюмирование', 'Перевод', 'Brainstorming'],
    pros: ['Внутри рабочего пространства', 'Быстрый доступ', 'История версий'],
    cons: ['Меньше возможностей, чем ChatGPT', 'Зависимость от Notion'],
    verdict: 'Удобно для ведения базы знаний команды и быстрых черновиков.',
  },
];
