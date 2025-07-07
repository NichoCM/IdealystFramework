import { StyleSheet } from 'react-native-unistyles';

export const inputStyles = StyleSheet.create((theme) => ({
  input: {
    variants: {
      size: {
        small: {
          height: 36,
          paddingHorizontal: theme.spacing.sm,
          paddingVertical: theme.spacing.xs,
          fontSize: theme.typography.fontSize.sm,
        },
        medium: {
          height: 44,
          paddingHorizontal: theme.spacing.md,
          paddingVertical: theme.spacing.sm,
          fontSize: theme.typography.fontSize.md,
        },
        large: {
          height: 52,
          paddingHorizontal: theme.spacing.lg,
          paddingVertical: theme.spacing.md,
          fontSize: theme.typography.fontSize.lg,
        },
      },
      variant: {
        default: {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
          color: theme.colors.text,
        },
        outlined: {
          backgroundColor: 'transparent',
          borderColor: theme.colors.primary,
          color: theme.colors.text,
        },
        filled: {
          backgroundColor: theme.colors.surface,
          borderColor: 'transparent',
          color: theme.colors.text,
        },
      },
    },
    borderWidth: 1,
    borderRadius: theme.borderRadius.md,
    fontWeight: theme.typography.fontWeight.regular,
    // Web-specific styles
    _web: {
      boxSizing: 'border-box',
      outline: 'none',
      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
      fontFamily: 'inherit',
      _focus: {
        borderColor: theme.colors.primary,
      },
      _hover: {
        borderColor: theme.colors.primary,
      },
    },
  },
  disabled: {
    opacity: 0.6,
    backgroundColor: theme.colors.surface,
    color: theme.colors.textSecondary,
    _web: {
      cursor: 'not-allowed',
    },
  },
  error: {
    borderColor: theme.colors.error,
    _web: {
      _focus: {
        borderColor: theme.colors.error,
        boxShadow: `0 0 0 2px ${theme.colors.error}20`,
      },
    },
  },
})); 