import { StyleSheet } from 'react-native-unistyles';

export const cardStyles = StyleSheet.create((theme) => ({
  card: {
    backgroundColor: theme.colors?.surface?.primary || '#ffffff',
    position: 'relative',
    overflow: 'hidden',
    
    variants: {
      variant: {
        default: {
          backgroundColor: theme.colors?.surface?.primary || '#ffffff',
          border: `1px solid ${theme.colors?.border?.primary || theme.palettes?.gray?.[200] || '#e5e7eb'}`,
        },
        outlined: {
          backgroundColor: 'transparent',
          border: `1px solid ${theme.colors?.border?.primary || theme.palettes?.gray?.[300] || '#d1d5db'}`,
        },
        elevated: {
          backgroundColor: theme.colors?.surface?.primary || '#ffffff',
          border: 'none',
        },
        filled: {
          backgroundColor: theme.colors?.surface?.secondary || theme.palettes?.gray?.[50] || '#f9fafb',
          border: 'none',
        },
      },
      padding: {
        none: {
          padding: 0,
        },
        small: {
          padding: theme.spacing?.sm || 8,
        },
        medium: {
          padding: theme.spacing?.md || 12,
        },
        large: {
          padding: theme.spacing?.lg || 16,
        },
      },
      radius: {
        none: {
          borderRadius: 0,
        },
        small: {
          borderRadius: theme.borderRadius?.sm || 4,
        },
        medium: {
          borderRadius: theme.borderRadius?.md || 8,
        },
        large: {
          borderRadius: theme.borderRadius?.lg || 12,
        },
      },
      intent: {
        neutral: {
          // Default colors handled by variant
        },
        primary: {
          // Intent colors applied via compound variants
        },
        success: {
          // Intent colors applied via compound variants  
        },
        error: {
          // Intent colors applied via compound variants
        },
        warning: {
          // Intent colors applied via compound variants
        },
        info: {
          // Intent colors applied via compound variants
        },
      },
      clickable: {
        true: {
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        },
        false: {
          cursor: 'default',
        },
      },
      disabled: {
        true: {
          opacity: 0.6,
          cursor: 'not-allowed',
        },
        false: {
          opacity: 1,
        },
      },
    },
    
    compoundVariants: [
      // Elevated variant with shadows
      {
        variant: 'elevated',
        styles: {
          shadowColor: theme.shadows?.md?.shadowColor || '#000',
          shadowOffset: theme.shadows?.md?.shadowOffset || { width: 0, height: 4 },
          shadowOpacity: theme.shadows?.md?.shadowOpacity || 0.1,
          shadowRadius: theme.shadows?.md?.shadowRadius || 8,
          elevation: theme.shadows?.md?.elevation || 4,
        },
      },
      // Intent color combinations for outlined variant
      {
        variant: 'outlined',
        intent: 'primary',
        styles: {
          borderColor: theme.intents?.primary?.main || '#3b82f6',
        },
      },
      {
        variant: 'outlined',
        intent: 'success',
        styles: {
          borderColor: theme.intents?.success?.main || '#22c55e',
        },
      },
      {
        variant: 'outlined',
        intent: 'error',
        styles: {
          borderColor: theme.intents?.error?.main || '#ef4444',
        },
      },
      {
        variant: 'outlined',
        intent: 'warning',
        styles: {
          borderColor: theme.intents?.warning?.main || '#f59e0b',
        },
      },
      {
        variant: 'outlined',
        intent: 'info',
        styles: {
          borderColor: theme.intents?.info?.main || '#06b6d4',
        },
      },
      // Intent color combinations for filled variant
      {
        variant: 'filled',
        intent: 'primary',
        styles: {
          backgroundColor: theme.intents?.primary?.container || theme.palettes?.blue?.[50] || '#eff6ff',
        },
      },
      {
        variant: 'filled',
        intent: 'success',
        styles: {
          backgroundColor: theme.intents?.success?.container || theme.palettes?.green?.[50] || '#f0fdf4',
        },
      },
      {
        variant: 'filled',
        intent: 'error',
        styles: {
          backgroundColor: theme.intents?.error?.container || theme.palettes?.red?.[50] || '#fef2f2',
        },
      },
      {
        variant: 'filled',
        intent: 'warning',
        styles: {
          backgroundColor: theme.intents?.warning?.container || theme.palettes?.amber?.[50] || '#fffbeb',
        },
      },
      {
        variant: 'filled',
        intent: 'info',
        styles: {
          backgroundColor: theme.intents?.info?.container || theme.palettes?.cyan?.[50] || '#ecfeff',
        },
      },
    ],
    
    _web: {
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      _hover: {
        // Hover effects for clickable cards
      },
    },
  },
}));

// Add hover effects for clickable cards
export const cardHoverStyles = StyleSheet.create((theme) => ({
  clickableHover: {
    _web: {
      _hover: {
        transform: 'translateY(-2px)',
        boxShadow: theme.shadows?.lg ? 
          `${theme.shadows.lg.shadowOffset.width}px ${theme.shadows.lg.shadowOffset.height}px ${theme.shadows.lg.shadowRadius}px rgba(0, 0, 0, ${theme.shadows.lg.shadowOpacity})` :
          '0 8px 16px rgba(0, 0, 0, 0.15)',
      },
    },
  },
})); 