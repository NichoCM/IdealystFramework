import { breakpoints, extendedThemes } from '@idealyst/components/src/theme';
import { highContrastThemes } from './highContrastThemes';
import { StyleSheet } from 'react-native-unistyles';

// Extend UnistylesThemes to include high contrast themes
// This overrides the more limited declaration from the components package
declare module 'react-native-unistyles' {
  export interface UnistylesThemes {
    light: typeof extendedThemes.light;
    dark: typeof extendedThemes.dark;
    lightHighContrast: typeof highContrastThemes.lightHighContrast;
    darkHighContrast: typeof highContrastThemes.darkHighContrast;
  }
}

// Configure with all themes, including high contrast variants
// This will override any previous configuration
StyleSheet.configure({
  themes: {
    light: extendedThemes.light,
    dark: extendedThemes.dark,
    lightHighContrast: highContrastThemes.lightHighContrast,
    darkHighContrast: highContrastThemes.darkHighContrast,
  },
  settings: {
    initialTheme: 'light',
  },
  breakpoints,
});

// Export theme names for easy reference
export const availableThemes = [
  'light',
  'dark', 
  'lightHighContrast',
  'darkHighContrast'
] as const;

export type AvailableTheme = typeof availableThemes[number];

// Helper function to get next theme in rotation
export function getNextTheme(currentTheme: string): AvailableTheme {
  const currentIndex = availableThemes.indexOf(currentTheme as AvailableTheme);
  const nextIndex = (currentIndex + 1) % availableThemes.length;
  return availableThemes[nextIndex];
}

// Helper function to get theme display name
export function getThemeDisplayName(theme: string): string {
  switch (theme) {
    case 'light':
      return 'Light';
    case 'dark':
      return 'Dark';
    case 'lightHighContrast':
      return 'Light High Contrast';
    case 'darkHighContrast':
      return 'Dark High Contrast';
    default:
      return theme;
  }
}

// Helper function to check if theme is high contrast
export function isHighContrastTheme(theme: string): boolean {
  return theme.includes('HighContrast');
}

// Helper function to get matching theme mode
export function getThemeMode(theme: string): 'light' | 'dark' {
  return theme.includes('dark') ? 'dark' : 'light';
}

// Helper function to get high contrast variant of current theme
export function getHighContrastVariant(theme: string): AvailableTheme {
  const mode = getThemeMode(theme);
  return mode === 'dark' ? 'darkHighContrast' : 'lightHighContrast';
}

// Helper function to get standard variant of current theme
export function getStandardVariant(theme: string): AvailableTheme {
  const mode = getThemeMode(theme);
  return mode === 'dark' ? 'dark' : 'light';
}