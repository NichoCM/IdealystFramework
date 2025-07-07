import { StyleSheet } from 'react-native-unistyles';

export const inputStyles = StyleSheet.create((theme) => ({
  input: {
    variants: {
      size: {
        small: {
          height: 36,
          paddingHorizontal: theme.spacing?.sm || 8,
          paddingVertical: theme.spacing?.xs || 4,
          fontSize: theme.typography?.fontSize?.sm || 14,
        },
        medium: {
          height: 44,
          paddingHorizontal: theme.spacing?.md || 12,
          paddingVertical: theme.spacing?.sm || 8,
          fontSize: theme.typography?.fontSize?.md || 16,
        },
        large: {
          height: 52,
          paddingHorizontal: theme.spacing?.lg || 16,
          paddingVertical: theme.spacing?.md || 12,
          fontSize: theme.typography?.fontSize?.lg || 18,
        },
      },
      variant: {
        default: {
          backgroundColor: theme.colors?.surface?.primary || '#ffffff',
          border: `1px solid ${theme.colors?.border?.primary || '#e5e7eb'}`,
          color: theme.colors?.text?.primary || '#000000',
        },
        outlined: {
          backgroundColor: 'transparent',
          border: `1px solid ${theme.intents?.primary?.main || '#3b82f6'}`,
          color: theme.colors?.text?.primary || '#000000',
        },
        filled: {
          backgroundColor: theme.colors?.surface?.secondary || '#f9fafb',
          border: 'none',
          color: theme.colors?.text?.primary || '#000000',
        },
      },
    },
    borderRadius: theme.borderRadius?.md || 8,
    fontWeight: theme.typography?.fontWeight?.regular || '400',
    // Web-specific styles
    _web: {
      boxSizing: 'border-box',
      outline: 'none',
      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
      fontFamily: 'inherit',
      _focus: {
        borderColor: theme.intents?.primary?.main || '#3b82f6',
      },
      _hover: {
        borderColor: theme.intents?.primary?.main || '#3b82f6',
      },
    },
  },
  disabled: {
    opacity: 0.6,
    backgroundColor: theme.colors?.surface?.secondary || '#f3f4f6',
    color: theme.colors?.text?.disabled || '#9ca3af',
    _web: {
      cursor: 'not-allowed',
    },
  },
  error: {
    border: `1px solid ${theme.intents?.error?.main || '#ef4444'}`,
    _web: {
      _focus: {
        borderColor: theme.intents?.error?.main || '#ef4444',
        boxShadow: `0 0 0 2px ${theme.intents?.error?.main || '#ef4444'}20`,
      },
    },
  },
})); 