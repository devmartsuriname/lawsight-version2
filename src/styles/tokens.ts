/**
 * LaSight Law Design Tokens
 * TypeScript constants for consistent styling across React components
 * Based on docs/style-guide.md
 */

// ============================================
// Brand Colors
// ============================================

export const colors = {
  primary: {
    start: '#c5a467',
    end: '#c9aa6e',
    gradient: 'linear-gradient(90deg, #c5a467 0%, #c9aa6e 100%)',
  },
  gold: {
    base: '#c5a467',
    light: '#d4b87c',
    dark: '#b39456',
  },
  text: {
    primary: '#1e1e1e',
    secondary: '#666666',
    light: '#888888',
    white: '#ffffff',
    gold: '#c5a467',
  },
  background: {
    white: '#ffffff',
    light: '#f9f9f9',
    dark: '#222222',
    footer: '#1a1a1a',
    overlay: 'rgba(0, 0, 0, 0.7)',
    overlayGradient: 'linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7))',
  },
  border: {
    light: '#e5e5e5',
    gold: '#c5a467',
    dark: '#333333',
  },
} as const;

// ============================================
// Typography
// ============================================

export const fonts = {
  families: {
    primary: "'Arimo', sans-serif",
    headings: "'Playfair Display', serif",
    signature: "'Great Vibes', cursive",
    body: "'Arimo', sans-serif",
  },
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  sizes: {
    h1: '48px',
    h2: '40px',
    h3: '32px',
    h4: '24px',
    h5: '20px',
    h6: '18px',
    body: '16px',
    small: '14px',
    tiny: '12px',
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.8,
  },
} as const;

// ============================================
// Spacing Scale
// ============================================

export const spacing = {
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px',
  '2xl': '64px',
  '3xl': '96px',
  '4xl': '128px',
  section: {
    default: '100px',
    compressed: '70px',
    large: '120px',
  },
} as const;

// ============================================
// Container Widths
// ============================================

export const containers = {
  default: '1200px',
  medium: '900px',
  auto: '1170px',
} as const;

// ============================================
// Breakpoints
// ============================================

export const breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1400px',
} as const;

// Media query helpers
export const media = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
} as const;

// ============================================
// Transitions
// ============================================

export const transitions = {
  fast: '0.2s ease',
  normal: '0.3s ease',
  slow: '0.5s ease',
  all: 'all 0.3s ease',
} as const;

// ============================================
// Border Radius
// ============================================

export const borderRadius = {
  sm: '3px',
  md: '5px',
  lg: '8px',
  round: '50%',
} as const;

// ============================================
// Shadows
// ============================================

export const shadows = {
  sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
  md: '0 10px 30px rgba(0, 0, 0, 0.1)',
  lg: '0 20px 50px rgba(0, 0, 0, 0.15)',
  gold: '0 5px 20px rgba(197, 164, 103, 0.3)',
} as const;

// ============================================
// Z-Index Scale
// ============================================

export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

// ============================================
// Button Styles
// ============================================

export const buttons = {
  padding: {
    default: '15px 40px',
    large: '18px 50px',
  },
  fontSize: '15px',
  fontWeight: fonts.weights.semibold,
  borderWidth: '2px',
  borderRadius: '0px',
} as const;

// ============================================
// Form Styles
// ============================================

export const forms = {
  input: {
    height: '50px',
    padding: '15px 20px',
    border: `1px solid ${colors.border.light}`,
    borderRadius: '0px',
    fontSize: '15px',
  },
  textarea: {
    minHeight: '150px',
    padding: '15px 20px',
  },
} as const;

// ============================================
// Icon Sizes
// ============================================

export const iconSizes = {
  sm: '20px',
  md: '40px',
  lg: '60px',
  xl: '80px',
} as const;

// ============================================
// Overlay Patterns
// ============================================

export const overlays = {
  dark: 'rgba(0, 0, 0, 0.7)',
  medium: 'rgba(0, 0, 0, 0.5)',
  light: 'rgba(0, 0, 0, 0.3)',
  gradientDark: 'linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7))',
  gradientGold: 'linear-gradient(135deg, rgba(197, 164, 103, 0.9), rgba(201, 170, 110, 0.8))',
} as const;

// ============================================
// Animation Timing
// ============================================

export const animations = {
  duration: {
    fast: '200ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

// ============================================
// Export all tokens as a single object
// ============================================

export const designTokens = {
  colors,
  fonts,
  spacing,
  containers,
  breakpoints,
  media,
  transitions,
  borderRadius,
  shadows,
  zIndex,
  buttons,
  forms,
  iconSizes,
  overlays,
  animations,
} as const;

export default designTokens;
