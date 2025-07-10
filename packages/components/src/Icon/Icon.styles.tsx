import { StyleSheet } from 'react-native-unistyles';

const iconStyles = StyleSheet.create((theme) => ({
  icon: {
    // Default size (medium)
    width: 24,
    height: 24,
    
    // Default theme-based color
    color: theme.colors?.text || '#000000',
    
    // Variants for different color schemes and sizes
    variants: {
      color: {
        primary: {
          color: theme.intents?.primary?.main || '#3b82f6',
        },
        success: {
          color: theme.intents?.success?.main || '#22c55e',
        },
        error: {
          color: theme.intents?.error?.main || '#ef4444',
        },
        warning: {
          color: theme.intents?.warning?.main || '#f59e0b',
        },
        neutral: {
          color: theme.intents?.neutral?.main || '#6b7280',
        },
        text: {
          color: theme.colors?.text || '#000000',
        },
        'text-secondary': {
          color: theme.colors?.text?.secondary || '#6b7280',
        },
        'text-disabled': {
          color: theme.colors?.text?.disabled || '#9ca3af',
        },
      },
      size: {
        xs: {
          width: 12,
          height: 12,
        },
        sm: {
          width: 16,
          height: 16,
        },
        md: {
          width: 24,
          height: 24,
        },
        lg: {
          width: 32,
          height: 32,
        },
        xl: {
          width: 48,
          height: 48,
        },
      },
    },
    
    // Web-specific styles
    _web: {
      display: 'inline-block',
      verticalAlign: 'middle',
      flexShrink: 0,
    },
  },
}));

export default iconStyles;