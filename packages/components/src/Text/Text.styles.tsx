import { StyleSheet } from 'react-native-unistyles';

export const textStyles = StyleSheet.create((theme) => ({
  text: {
    variants: {
      size: {
        small: {
          fontSize: theme.typography.fontSize.xs,
          lineHeight: theme.typography.fontSize.xs * 1.33,
        },
        medium: {
          fontSize: theme.typography.fontSize.md,
          lineHeight: theme.typography.fontSize.md * 1.5,
        },
        large: {
          fontSize: theme.typography.fontSize.lg,
          lineHeight: theme.typography.fontSize.lg * 1.4,
        },
        xlarge: {
          fontSize: theme.typography.fontSize.xl,
          lineHeight: theme.typography.fontSize.xl * 1.33,
        },
      },
      weight: {
        light: {
          fontWeight: theme.typography.fontWeight.light,
        },
        normal: {
          fontWeight: theme.typography.fontWeight.regular,
        },
        medium: {
          fontWeight: theme.typography.fontWeight.medium,
        },
        semibold: {
          fontWeight: theme.typography.fontWeight.semibold,
        },
        bold: {
          fontWeight: theme.typography.fontWeight.bold,
        },
      },
      align: {
        left: {
          textAlign: 'left',
        },
        center: {
          textAlign: 'center',
        },
        right: {
          textAlign: 'right',
        },
      },
      color: {
        primary: {
          color: theme.colors.text,
        },
        secondary: {
          color: theme.colors.textSecondary,
        },
        success: {
          color: theme.colors.success,
        },
        warning: {
          color: theme.colors.warning,
        },
        error: {
          color: theme.colors.error,
        },
      },
    },
    margin: 0,
    padding: 0,
    // Web-specific styles
    _web: {
      fontFamily: 'inherit',
      lineHeight: 'inherit',
    },
  },
})); 