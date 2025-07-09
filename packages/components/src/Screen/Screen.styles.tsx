import { StyleSheet } from 'react-native-unistyles';

export const screenStyles = StyleSheet.create((theme) => ({
  screen: {
    flex: 1,
    // Default background color as fallback
    backgroundColor: theme.colors.surface.primary,
    variants: {
      background: {
        primary: {
          backgroundColor: theme.colors.surface.primary,
        },
        secondary: {
          backgroundColor: theme.colors.surface.secondary,
        },
        tertiary: {
          backgroundColor: theme.colors.surface.tertiary,
        },
        inverse: {
          backgroundColor: theme.colors.surface.inverse,
        },
      },
    },
    // Web-specific styles
    _web: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      boxSizing: 'border-box',
    },
  },
})); 