// TypeScript Constants for UI Wamly Package

// Spacing scale (based on 4px grid)
export const SPACING = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
} as const;

// Negative spacing
export const NEGATIVE_SPACING = {
  "-1": "-4px",
  "-2": "-8px",
  "-3": "-12px",
  "-4": "-16px",
  "-5": "-20px",
  "-6": "-24px",
  "-7": "-28px",
  "-8": "-32px",
  "-9": "-36px",
  "-10": "-40px",
} as const;

// Neutral colors
export const NEUTRAL_COLORS = {
  0: "#FFFFFF",
  100: "#F8F8F8",
  200: "#F1F2F6",
  300: "#DDDEE1",
  400: "#B7B9BE",
  500: "#8C8F97",
  600: "#7D818A",
  700: "#6B6E76",
  800: "#505258",
  900: "#3B3D42",
  1000: "#292A2E",
} as const;

// Neutral alpha colors
export const NEUTRAL_ALPHA_COLORS = {
  100: "#171717",
  200: "#051524",
  300: "#0B1228",
  400: "#080F21",
  500: "#050C1F",
} as const;

// Dark colors
export const DARK_COLORS = {
  0: "#18191A",
  100: "#1F1F21",
  200: "#242528",
  300: "#303134",
  400: "#4B4D51",
  500: "#63666B",
  600: "#8A8D93",
  700: "#A0A2A7",
  800: "#B5B7BA",
  900: "#D2D3D5",
  1000: "#F2F2F3",
} as const;

// Dark alpha colors
export const DARK_ALPHA_COLORS = {
  100: "#BDBDBD",
  200: "#CECED9",
  300: "#E3E4F2",
  400: "#E5E9F6",
  500: "#EDF3FC",
} as const;

// Brand colors - Tomato
export const TOMATO_COLORS = {
  100: "#FFF1F1",
  200: "#FFC7C7",
  300: "#FFA0A0",
  400: "#FF5757",
  500: "#FD2B2B",
  600: "#E00606",
  700: "#CA0B0B",
  800: "#A70E0E",
  900: "#8C1010",
  1000: "#450A0A",
} as const;

// Brand colors - Blue
export const BLUE_COLORS = {
  100: "#EFF7FF",
  200: "#CCE7FF",
  300: "#92CEFF",
  400: "#5DB2FD",
  500: "#3790FA",
  600: "#076EC2",
  700: "#07649D",
  800: "#0A5582",
  900: "#0F466B",
  1000: "#0A2E49",
} as const;

// Brand colors - Sunshine
export const SUNSHINE_COLORS = {
  100: "#FFF5D6",
  200: "#FFE699",
  300: "#FFCE55",
  400: "#FFB520",
  500: "#F9A007",
  600: "#DD8502",
  700: "#B76706",
  800: "#94500C",
  900: "#7A3C0D",
  1000: "#461902",
} as const;

// Brand colors - Green
export const GREEN_COLORS = {
  100: "#F0FDF1",
  200: "#BDF5C6",
  300: "#8AEB9A",
  400: "#64DD78",
  500: "#28BF42",
  600: "#1B9E31",
  700: "#197C2A",
  800: "#196226",
  900: "#165121",
  1000: "#072C0F",
} as const;

// Text colors
export const TEXT_COLORS = {
  primary: {
    light: NEUTRAL_COLORS[1000],
    dark: DARK_COLORS[1000],
  },
  secondary: {
    light: NEUTRAL_COLORS[800],
    dark: DARK_COLORS[800],
  },
  tertiary: {
    light: NEUTRAL_COLORS[700],
    dark: DARK_COLORS[700],
  },
  invert: {
    light: NEUTRAL_COLORS[0],
    dark: DARK_COLORS[100],
  },
  danger: {
    light: TOMATO_COLORS[700],
    dark: TOMATO_COLORS[300],
  },
  warning: {
    light: SUNSHINE_COLORS[700],
    dark: SUNSHINE_COLORS[300],
  },
  success: {
    light: GREEN_COLORS[700],
    dark: GREEN_COLORS[300],
  },
  information: {
    light: BLUE_COLORS[700],
    dark: BLUE_COLORS[300],
  },
  disabled: {
    light: NEUTRAL_ALPHA_COLORS[400],
    dark: DARK_ALPHA_COLORS[400],
  },
} as const;

// Background colors
export const BACKGROUND_COLORS = {
  neutral: {
    default: {
      light: NEUTRAL_ALPHA_COLORS[200],
      dark: DARK_ALPHA_COLORS[200],
    },
    hovered: {
      light: NEUTRAL_ALPHA_COLORS[300],
      dark: DARK_ALPHA_COLORS[300],
    },
    pressed: {
      light: NEUTRAL_ALPHA_COLORS[400],
      dark: DARK_ALPHA_COLORS[400],
    },
  },
  neutralBold: {
    default: {
      light: NEUTRAL_COLORS[800],
      dark: DARK_COLORS[800],
    },
    hovered: {
      light: NEUTRAL_COLORS[900],
      dark: DARK_COLORS[900],
    },
    pressed: {
      light: NEUTRAL_COLORS[1000],
      dark: DARK_COLORS[1000],
    },
  },
  danger: {
    default: {
      light: TOMATO_COLORS[200],
      dark: TOMATO_COLORS[900],
    },
    hovered: {
      light: TOMATO_COLORS[300],
      dark: TOMATO_COLORS[800],
    },
    pressed: {
      light: TOMATO_COLORS[400],
      dark: TOMATO_COLORS[700],
    },
  },
  dangerSubtle: {
    default: {
      light: TOMATO_COLORS[100],
      dark: TOMATO_COLORS[1000],
    },
    hovered: {
      light: TOMATO_COLORS[200],
      dark: TOMATO_COLORS[900],
    },
    pressed: {
      light: TOMATO_COLORS[300],
      dark: TOMATO_COLORS[800],
    },
  },
  dangerBold: {
    default: {
      light: TOMATO_COLORS[700],
      dark: TOMATO_COLORS[400],
    },
    hovered: {
      light: TOMATO_COLORS[800],
      dark: TOMATO_COLORS[300],
    },
    pressed: {
      light: TOMATO_COLORS[900],
      dark: TOMATO_COLORS[200],
    },
  },
  warning: {
    default: {
      light: SUNSHINE_COLORS[200],
      dark: SUNSHINE_COLORS[900],
    },
    hovered: {
      light: SUNSHINE_COLORS[400],
      dark: SUNSHINE_COLORS[800],
    },
    pressed: {
      light: SUNSHINE_COLORS[500],
      dark: SUNSHINE_COLORS[700],
    },
  },
  warningSubtle: {
    default: {
      light: SUNSHINE_COLORS[100],
      dark: SUNSHINE_COLORS[1000],
    },
    hovered: {
      light: SUNSHINE_COLORS[200],
      dark: SUNSHINE_COLORS[900],
    },
    pressed: {
      light: SUNSHINE_COLORS[300],
      dark: SUNSHINE_COLORS[800],
    },
  },
  warningBold: {
    default: {
      light: SUNSHINE_COLORS[600],
      dark: SUNSHINE_COLORS[400],
    },
    hovered: {
      light: SUNSHINE_COLORS[700],
      dark: SUNSHINE_COLORS[300],
    },
    pressed: {
      light: SUNSHINE_COLORS[800],
      dark: SUNSHINE_COLORS[200],
    },
  },
  success: {
    default: {
      light: GREEN_COLORS[200],
      dark: GREEN_COLORS[900],
    },
    hovered: {
      light: GREEN_COLORS[300],
      dark: GREEN_COLORS[800],
    },
    pressed: {
      light: GREEN_COLORS[400],
      dark: GREEN_COLORS[700],
    },
  },
  successBold: {
    default: {
      light: GREEN_COLORS[700],
      dark: GREEN_COLORS[400],
    },
    hovered: {
      light: GREEN_COLORS[800],
      dark: GREEN_COLORS[300],
    },
    pressed: {
      light: GREEN_COLORS[900],
      dark: GREEN_COLORS[200],
    },
  },
  information: {
    default: {
      light: BLUE_COLORS[200],
      dark: BLUE_COLORS[900],
    },
    hovered: {
      light: BLUE_COLORS[200],
      dark: BLUE_COLORS[800],
    },
    pressed: {
      light: BLUE_COLORS[300],
      dark: BLUE_COLORS[700],
    },
  },
  informationSubtle: {
    default: {
      light: BLUE_COLORS[100],
      dark: BLUE_COLORS[1000],
    },
    hovered: {
      light: BLUE_COLORS[200],
      dark: BLUE_COLORS[900],
    },
    pressed: {
      light: BLUE_COLORS[300],
      dark: BLUE_COLORS[800],
    },
  },
  informationBold: {
    default: {
      light: BLUE_COLORS[700],
      dark: BLUE_COLORS[400],
    },
    hovered: {
      light: BLUE_COLORS[800],
      dark: BLUE_COLORS[300],
    },
    pressed: {
      light: BLUE_COLORS[900],
      dark: BLUE_COLORS[200],
    },
  },
  grey: {
    default: {
      light: NEUTRAL_COLORS[200],
      dark: DARK_COLORS[200],
    },
    hovered: {
      light: NEUTRAL_COLORS[300],
      dark: DARK_COLORS[300],
    },
    pressed: {
      light: NEUTRAL_COLORS[400],
      dark: DARK_COLORS[400],
    },
  },
  greyBold: {
    default: {
      light: NEUTRAL_COLORS[700],
      dark: DARK_COLORS[700],
    },
    hovered: {
      light: NEUTRAL_COLORS[800],
      dark: DARK_COLORS[800],
    },
    pressed: {
      light: NEUTRAL_COLORS[900],
      dark: DARK_COLORS[900],
    },
  },
  input: {
    default: {
      light: NEUTRAL_COLORS[0],
      dark: DARK_COLORS[200],
    },
    hovered: {
      light: NEUTRAL_COLORS[100],
      dark: DARK_COLORS[300],
    },
  },
} as const;

// Border colors
export const BORDER_COLORS = {
  default: {
    light: NEUTRAL_ALPHA_COLORS[300],
    dark: DARK_ALPHA_COLORS[300],
  },
  subtle: {
    light: NEUTRAL_ALPHA_COLORS[200],
    dark: DARK_ALPHA_COLORS[200],
  },
  bold: {
    light: NEUTRAL_COLORS[600],
    dark: DARK_COLORS[600],
  },
  invert: {
    light: NEUTRAL_COLORS[0],
    dark: DARK_COLORS[0],
  },
  selected: {
    light: NEUTRAL_COLORS[1000],
    dark: DARK_COLORS[1000],
  },
  focused: {
    light: NEUTRAL_COLORS[800],
    dark: DARK_COLORS[800],
  },
  disabled: {
    light: NEUTRAL_ALPHA_COLORS[200],
    dark: DARK_ALPHA_COLORS[200],
  },
  danger: {
    light: TOMATO_COLORS[600],
    dark: TOMATO_COLORS[500],
  },
  warning: {
    light: SUNSHINE_COLORS[600],
    dark: SUNSHINE_COLORS[500],
  },
  success: {
    light: GREEN_COLORS[600],
    dark: GREEN_COLORS[500],
  },
  information: {
    light: BLUE_COLORS[600],
    dark: BLUE_COLORS[500],
  },
} as const;

// Elevation colors
export const ELEVATION_COLORS = {
  surface: {
    default: {
      light: NEUTRAL_COLORS[0],
      dark: DARK_COLORS[200],
    },
    hovered: {
      light: NEUTRAL_COLORS[200],
      dark: DARK_COLORS[300],
    },
    pressed: {
      light: NEUTRAL_COLORS[300],
      dark: DARK_COLORS[400],
    },
  },
  surfaceSunken: {
    default: {
      light: NEUTRAL_COLORS[100],
      dark: DARK_COLORS[100],
    },
    more: {
      light: NEUTRAL_COLORS[200],
      dark: DARK_COLORS[0],
    },
  },
  shadowOverflow: {
    default: {
      light: "#1E1F21",
      dark: "#010404",
    },
    spread: {
      light: "rgba(30, 31, 33, 0.16)",
      dark: "rgba(1, 4, 4, 0.56)",
    },
    perimeter: {
      light: "rgba(30, 31, 33, 0.12)",
      dark: "rgba(1, 4, 4, 0.50)",
    },
    color: {
      light: NEUTRAL_COLORS[0],
      dark: NEUTRAL_COLORS[0],
    },
  },
  shadowRaised: {
    default: {
      light: "#1E1F21",
      dark: "#010404",
    },
    spread: {
      light: "rgba(30, 31, 33, 0.25)",
      dark: "rgba(1, 4, 4, 0.80)",
    },
    perimeter: {
      light: "rgba(30, 31, 33, 0.31)",
      dark: "rgba(1, 4, 4, 0.80)",
    },
    color: {
      light: "#1E1F21",
      dark: "#1E1F21",
    },
  },
  shadowOverlay: {
    default: {
      light: "#1E1F21",
      dark: "#010404",
    },
    inner: {
      light: "rgba(189, 189, 189, 0)",
      dark: "#BDBDBD",
    },
  },
} as const;

// Wamly brand colors
export const WAMLY_COLORS = {
  accent: TOMATO_COLORS[400], // #FF5757
  accent60: "#FF9C9C",
} as const;

// Semantic color mapping (legacy)
export const COLORS = {
  // Primary brand colors
  primary: WAMLY_COLORS.accent,
  primaryHover: TOMATO_COLORS[500],
  primaryActive: TOMATO_COLORS[600],

  // Secondary colors
  secondary: NEUTRAL_COLORS[500],
  secondaryHover: NEUTRAL_COLORS[600],
  secondaryActive: NEUTRAL_COLORS[700],

  // Status colors
  success: GREEN_COLORS[500],
  warning: SUNSHINE_COLORS[500],
  error: TOMATO_COLORS[500],

  // Background colors
  background: NEUTRAL_COLORS[0],
  surface: NEUTRAL_COLORS[100],
  border: NEUTRAL_COLORS[300],
  text: NEUTRAL_COLORS[1000],
  textMuted: NEUTRAL_COLORS[600],

  // Dark theme
  darkBackground: DARK_COLORS[0],
  darkSurface: DARK_COLORS[100],
  darkBorder: DARK_COLORS[300],
  darkText: DARK_COLORS[1000],
  darkTextMuted: DARK_COLORS[600],
} as const;

export const BORDER_RADIUS = {
  sm: "0.25rem", // 4px
  md: "0.375rem", // 6px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  full: "9999px",
} as const;

export const SHADOWS = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
} as const;

export const TYPOGRAPHY = {
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

export const TRANSITIONS = {
  fast: "150ms ease-in-out",
  normal: "250ms ease-in-out",
  slow: "350ms ease-in-out",
} as const;

export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

// Button variants
export const BUTTON_VARIANTS = {
  fill: "fill",
  outline: "outline",
  soft: "soft",
} as const;

export type ButtonVariant = keyof typeof BUTTON_VARIANTS;

// Button sizes
export const BUTTON_SIZES = {
  L: "L",
  M: "M",
  S: "S",
} as const;

export type ButtonSize = keyof typeof BUTTON_SIZES;

// Button colors
export const BUTTON_COLORS = {
  primary: "primary",
  secondary: "secondary",
  success: "success",
  warning: "warning",
  danger: "danger",
  information: "information",
  neutral: "neutral",
} as const;

export type ButtonColor = keyof typeof BUTTON_COLORS;

// Button states
export const BUTTON_STATES = {
  enabled: "enabled",
  disabled: "disabled",
} as const;

export type ButtonState = keyof typeof BUTTON_STATES;
