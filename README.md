# UI Wamly Package

Бібліотека UI компонентів для проекту Wamly, побудована на React 18 та TypeScript.

## 🚀 Особливості

- ⚛️ React 18 з TypeScript
- 📚 Storybook для документації та тестування компонентів
- 🎨 Готові UI компоненти з підтримкою тем
- 📦 Готово для публікації на NPM як приватний пакет
- 🔧 Налаштована збірка з Rollup

## 📦 Встановлення

```bash
npm install @breadbq/ui-wamly
```

## 🎯 Використання

```tsx
import { Button, Input, Card } from '@breadbq/ui-wamly';

function App() {
  return (
    <div>
      <Button variant="primary" size="md">
        Click me
      </Button>
      
      <Input 
        label="Email" 
        type="email" 
        placeholder="Enter your email" 
      />
      
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content goes here</p>
        </CardContent>
      </Card>
    </div>
  );
}
```

## 🧩 Компоненти

### Button
- Варіанти: `primary`, `secondary`, `outline`, `ghost`
- Розміри: `sm`, `md`, `lg`
- Підтримка всіх стандартних HTML атрибутів

### Input
- Підтримка різних типів (`text`, `email`, `password`, `number`)
- Лейбли та повідомлення про помилки
- Helper text

### Card
- Модульна структура з `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
- Гнучка система стилізації

## 🛠 Розробка

### Встановлення залежностей
```bash
npm install
```

### Запуск Storybook
```bash
npm run storybook
```

### Збірка бібліотеки
```bash
npm run build
```

### Лінтинг
```bash
npm run lint
npm run lint:fix
```

### Перевірка типів
```bash
npm run type-check
```

## 📚 Storybook

Storybook доступний за адресою `http://localhost:6006` після запуску `npm run storybook`.

Тут ви можете:
- Переглядати всі компоненти
- Тестувати різні варіанти та стани
- Копіювати код для використання
- Переглядати документацію

## 🎨 Стилізація

Бібліотека використовує CSS змінні для темизації. Підтримується світла та темна теми.

## 📝 Ліцензія

MIT

## 👨‍💻 Автор

breadbq
