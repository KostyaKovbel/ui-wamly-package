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

- **Main branch**: Automatically publishes patch versions with `latest` tag
- **Dev branch**: Automatically publishes dev versions with `dev` tag
- **Staging branch**: Automatically publishes staging versions with `staging` tag

#### Manual Publishing

To manually publish a new version:

1. Go to Actions tab in GitHub
2. Run "Deploy and Publish (Production)" workflow
3. Choose version type (patch, minor, major)
4. The package will be published to NPM with `latest` tag

#### Installing Different Versions

```bash
# Production (latest)
npm install ui-wamly-package

# Development
npm install ui-wamly-package@dev

# Staging
npm install ui-wamly-package@staging
```

## 📚 Storybook

### Local Development

Storybook is available at `http://localhost:6006` after running `npm run storybook`.

### Online Documentation

The Storybook is automatically deployed to GitHub Pages:

- **Production**: https://kostyakovbel.github.io/ui-wamly-package/ (main branch)
- **Development**: https://kostyakovbel.github.io/ui-wamly-package/dev (dev branch)
- **Staging**: https://kostyakovbel.github.io/ui-wamly-package/staging (staging branch)

#### Setting up Vercel

To enable Vercel deployment:

1. Go to https://vercel.com and sign in with GitHub
2. Click "New Project" and select your repository
3. Configure build settings:
   - Build Command: `npm run build-storybook`
   - Output Directory: `storybook-static`
4. Vercel will automatically deploy on every push to any branch

#### Setting up NPM Publishing

To enable NPM publishing:

1. Add NPM token to GitHub Secrets:
   - `NPM_TOKEN` - from https://www.npmjs.com/settings/tokens
2. GitHub Actions will automatically publish on every push:
   - Main branch → `latest` tag
   - Dev branch → `dev` tag
   - Staging branch → `staging` tag

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
