import { defaultLightTheme, defaultDarkTheme } from '../theme/defaultThemes';

const appThemes = {
  light: defaultLightTheme,
  dark: defaultDarkTheme,
} as const;

// Extended color palettes
export const extendedColorPalettes = {
  // Include all base colors
  ...appThemes.light.palettes,
  
  // Add extended colors
  orange: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
  
  teal: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
  },
  
  indigo: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
  },
  
  violet: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6b21a8',
    900: '#581c87',
  },
  
  emerald: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },
} as const;

// Extended intent mappings
export const extendedIntentMappings = {
  // Include all base intents
  ...appThemes.light.intents,
  
  // Add extended intents
  accent: {
    palette: 'orange' as const,
    main: 500 as const,
    on: '#ffffff',
    container: 100 as const,
    onContainer: 800 as const,
    light: 200 as const,
    dark: 700 as const,
    border: 300 as const,
  },
  
  feature: {
    palette: 'teal' as const,
    main: 500 as const,
    on: '#ffffff',
    container: 100 as const,
    onContainer: 800 as const,
    light: 200 as const,
    dark: 700 as const,
    border: 300 as const,
  },
  
  highlight: {
    palette: 'violet' as const,
    main: 500 as const,
    on: '#ffffff',
    container: 100 as const,
    onContainer: 800 as const,
    light: 200 as const,
    dark: 700 as const,
    border: 300 as const,
  },
} as const;

// Extended themes
export const extendedThemes = {
  light: {
    ...appThemes.light,
    palettes: extendedColorPalettes,
    intents: extendedIntentMappings,
  },
  
  dark: {
    ...appThemes.dark,
    palettes: extendedColorPalettes,
    intents: extendedIntentMappings,
  },
} as const;

// Extended type definitions for TypeScript
export type ExtendedColorVariant = 
  | 'blue'
  | 'green' 
  | 'red'
  | 'amber'
  | 'gray'
  | 'purple'
  | 'pink'
  | 'cyan'
  | 'orange'
  | 'teal'
  | 'indigo'
  | 'violet'
  | 'emerald';

export type ExtendedIntentVariant = 
  | 'primary'
  | 'success' 
  | 'error'
  | 'warning'
  | 'neutral'
  | 'info'
  | 'accent'
  | 'feature'
  | 'highlight';