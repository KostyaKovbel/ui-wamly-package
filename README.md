# UI Wamly Package

A UI component library for the Wamly project, built with React 18 and TypeScript.

## 🚀 Features

- ⚛️ React 18 with TypeScript
- 📚 Storybook for component documentation and testing
- 🎨 Ready-to-use UI components with theme support
- 📦 Ready for NPM publication as a private package
- 🔧 Configured build with Rollup

## 📦 Installation

```bash
npm install ui-wamly-package
```

## 🎯 Usage

```tsx
import { Button } from "ui-wamly-package";
import "ui-wamly-package/dist/index.css";

function App() {
  return (
    <div>
      <Button appearance="primary" size="md">
        Click me
      </Button>
    </div>
  );
}
```

## 🧩 Components

### Button

- Variants: `primary`, `secondary`, `outline`, `ghost`, `success`, `warning`, `error`
- Sizes: `sm`, `md`, `lg`
- Support for all standard HTML button attributes

## 🛠 Development

### Install dependencies

```bash
npm install
```

### Run Storybook

```bash
npm run storybook
```

### Build library

```bash
npm run build
```

### Linting

```bash
npm run lint
npm run lint:fix
```

### Type checking

```bash
npm run type-check
```

### Publishing to NPM

#### Automatic Publishing

Every push to main branch automatically:

1. Patches the version (1.0.2 → 1.0.3)
2. Publishes to NPM with `latest` tag
3. Deploys Storybook to GitHub Pages

## 📚 Storybook

### Local Development

Storybook is available at `http://localhost:6006` after running `npm run storybook`.

### Online Documentation

The Storybook is automatically deployed to GitHub Pages:

**https://kostyakovbel.github.io/ui-wamly-package/**

#### Setting up GitHub Pages

To enable GitHub Pages deployment:

1. Go to your repository Settings
2. Navigate to Pages section
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy on every push to main branch

#### Setting up NPM Publishing

To enable NPM publishing:

1. Add NPM token to GitHub Secrets:
   - `NPM_TOKEN` - from https://www.npmjs.com/settings/tokens
2. GitHub Actions will automatically publish on every push to main branch

Here you can:

- View all components
- Test different variants and states
- Copy code for usage
- View documentation

## 🎨 Styling

The library uses CSS variables for theming. Light and dark themes are supported.

### CSS Variables

The library provides CSS variables with the `--w-` prefix:

```css
:root {
  --w-color-primary: #3b82f6;
  --w-color-primary-hover: #2563eb;
  --w-color-primary-active: #1d4ed8;
  --w-spacing-md: 1rem;
  --w-radius-md: 0.375rem;
  /* ... and many more */
}
```

### Import Styles

Make sure to import the CSS file in your application:

```tsx
import "ui-wamly-package/dist/index.css";
```

## 📝 License

MIT

## 👨‍💻 Author

breadbq

# Test staging deployment
