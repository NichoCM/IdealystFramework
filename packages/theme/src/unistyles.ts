import { StyleSheet } from 'react-native-unistyles';
import { breakpoints } from './index';
import { defaultLightTheme as lightTheme, defaultDarkTheme as darkTheme } from './defaultThemes';

// Export enhanced theme types
export type AppTheme = typeof lightTheme;
export type AppIntents = typeof lightTheme.intents;
export type AppColors = typeof lightTheme.colors;
export type AppPalettes = typeof lightTheme.palettes;
export type IntentNames = keyof AppIntents;
export type ColorNames = keyof AppColors;

// Unistyles v3 themes declaration
declare module 'react-native-unistyles' {
  export interface UnistylesThemes {
    light: typeof lightTheme;
    dark: typeof darkTheme;
  }
  
  export interface UnistylesBreakpoints {
    xs: typeof breakpoints.xs;
    sm: typeof breakpoints.sm;
    md: typeof breakpoints.md;
    lg: typeof breakpoints.lg;
    xl: typeof breakpoints.xl;
  }
}


StyleSheet.configure({
    settings: {
        initialTheme: 'light',
    },
    breakpoints,
    themes: {
      light: lightTheme,
      dark: darkTheme,
    }
})