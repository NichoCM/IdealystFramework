import { StyleSheet } from 'react-native-unistyles';

// Unistyles v3 configuration
export const lightTheme = {
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    background: '#FFFFFF',
    surface: '#F2F2F7',
    text: '#000000',
    textSecondary: '#6D6D80',
    border: '#E5E5EA',
    success: '#34C759',
    warning: '#FF9500',
    error: '#FF3B30',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },
  borderRadius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
  },
  typography: {
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      xxl: 24,
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  // Dynamic functions
  gap: (value: number) => value * 8,
  scale: (value: number) => value * 1.2,
} as const;

export const darkTheme = {
  colors: {
    primary: '#0A84FF',
    secondary: '#5E5CE6',
    background: '#000000',
    surface: '#1C1C1E',
    text: '#FFFFFF',
    textSecondary: '#98989D',
    border: '#38383A',
    success: '#32D74B',
    warning: '#FF9F0A',
    error: '#FF453A',
  },
  spacing: lightTheme.spacing,
  borderRadius: lightTheme.borderRadius,
  typography: lightTheme.typography,
  gap: lightTheme.gap,
  scale: lightTheme.scale,
} as const;

export const breakpoints = {
  xs: 0,
  sm: 400,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

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