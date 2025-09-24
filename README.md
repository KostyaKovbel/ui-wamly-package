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
      <Button variant="fill" color="primary" size="M">
        Click me
      </Button>
    </div>
  );
}
```

## 🧩 Components

### Button

A versatile button component with multiple variants, colors, and sizes.

#### Props

- `size`: `"L"` | `"M"` | `"S"` - Button size (default: `"M"`)
- `variant`: `"fill"` | `"outline"` | `"soft"` - Button style (default: `"fill"`)
- `color`: `"primary"` | `"secondary"` | `"success"` | `"warning"` | `"danger"` | `"information"` | `"neutral"` - Button color (default: `"primary"`)
- `state`: `"enabled"` | `"disabled"` - Button state (default: `"enabled"`)
- `disabled`: `boolean` - HTML disabled attribute
- `children`: `React.ReactNode` - Button content
- `onClick`: `(event: React.MouseEvent<HTMLButtonElement>) => void` - Click handler
- `className`: `string` - Additional CSS classes
- `...props`: All standard HTML button attributes

#### Usage Examples

```tsx
// Basic usage
<Button>Click me</Button>

// Different sizes
<Button size="L">Large Button</Button>
<Button size="M">Medium Button</Button>
<Button size="S">Small Button</Button>

// Different variants
<Button variant="fill" color="primary">Fill Button</Button>
<Button variant="outline" color="primary">Outline Button</Button>
<Button variant="soft" color="primary">Soft Button</Button>

// Different colors
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="danger">Danger</Button>

// Disabled state
<Button state="disabled">Disabled Button</Button>
<Button disabled>Also Disabled</Button>

// All color combinations
<Button variant="fill" color="primary">Primary Fill</Button>
<Button variant="outline" color="success">Success Outline</Button>
<Button variant="soft" color="warning">Warning Soft</Button>
<Button variant="fill" color="danger">Danger Fill</Button>
<Button variant="outline" color="information">Info Outline</Button>
<Button variant="soft" color="neutral">Neutral Soft</Button>

// Size and variant combinations
<Button size="L" variant="fill" color="primary">Large Primary</Button>
<Button size="M" variant="outline" color="success">Medium Success</Button>
<Button size="S" variant="soft" color="warning">Small Warning</Button>
```

#### TypeScript Support

The Button component is fully typed with TypeScript:

```tsx
import { Button, ButtonProps } from "ui-wamly-package";

// Type-safe props
const MyButton: React.FC<ButtonProps> = ({ size, variant, color, onClick }) => {
  return (
    <Button size={size} variant={variant} color={color} onClick={onClick}>
      Click me
    </Button>
  );
};

// Available types
type ButtonSize = "L" | "M" | "S";
type ButtonVariant = "fill" | "outline" | "soft";
type ButtonColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "information"
  | "neutral";
type ButtonState = "enabled" | "disabled";
```

#### Design System

- **Font**: Poppins (300, 400, 500, 600, 700 weights)
- **Spacing**: 4px grid system (0px to 40px)
- **Colors**: Wamly brand colors with tomato accent (#FF5757)
- **Sizes**:
  - **L**: 16px font, 16px/24px padding (vertical/horizontal), min-height 48px
  - **M**: 16px font, 8px/12px padding (vertical/horizontal), min-height 40px
  - **S**: 14px font, 8px/12px padding (vertical/horizontal), min-height 32px
- **Variants**:
  - **Fill**: Solid background with brand color, white text
  - **Outline**: Transparent background, colored border and text
  - **Soft**: Light background with brand color, colored text
- **Accessibility**: Full keyboard navigation, focus indicators, ARIA support
- **Theming**: Automatic light/dark theme support via CSS variables
- **Hover/Active States**: Smooth transitions with proper feedback

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

## 🎨 Design System

The library follows the Wamly design system with:

- **Typography**: Poppins font family (300, 400, 500, 600, 700 weights)
- **Spacing**: 4px grid system (0px to 40px)
- **Colors**: Tomato accent color (#FF5757) with full color palette
- **Components**: Consistent sizing and styling across all components
- **Theming**: Light and dark theme support with CSS variables

### CSS Variables

The library provides CSS variables with the `--w-` prefix:

```css
:root {
  /* Wamly brand colors */
  --wamly-accent: #ff5757;
  --wamly-accent-60: #ff9c9c;

  /* Typography */
  --w-font-family: "Poppins", sans-serif;

  /* Spacing (4px grid) */
  --w-spacing-0: 0px;
  --w-spacing-1: 4px;
  --w-spacing-2: 8px;
  --w-spacing-3: 12px;
  --w-spacing-4: 16px;
  --w-spacing-5: 20px;
  --w-spacing-6: 24px;
  --w-spacing-7: 28px;
  --w-spacing-8: 32px;
  --w-spacing-9: 36px;
  --w-spacing-10: 40px;

  /* Colors */
  --w-text-primary: #292a2e;
  --w-text-secondary: #505258;
  --w-text-tertiary: #6b6e76;
  --w-text-invert: #ffffff;

  /* Background colors */
  --w-bg-neutral: rgba(30, 31, 33, 0.06);
  --w-bg-danger: #ffc7c7;
  --w-bg-success: #bdf5c6;
  --w-bg-warning: #ffe699;
  --w-bg-information: #cce7ff;

  /* Border colors */
  --w-border-default: rgba(30, 31, 33, 0.12);
  --w-border-focused: #505258;
  --w-border-danger: #e00606;
  --w-border-success: #1b9e31;
  --w-border-warning: #dd8502;
  --w-border-information: #076ec2;

  /* And many more... */
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
