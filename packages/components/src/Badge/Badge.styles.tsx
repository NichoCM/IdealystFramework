import { StyleSheet } from 'react-native-unistyles';

export const badgeStyles = StyleSheet.create((theme) => ({
  badge: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
    
    variants: {
      size: {
        small: {
          minWidth: 16,
          height: 16,
          paddingHorizontal: 4,
        },
        medium: {
          minWidth: 20,
          height: 20,
          paddingHorizontal: 6,
        },
        large: {
          minWidth: 24,
          height: 24,
          paddingHorizontal: 8,
        },
      },
      variant: {
        filled: {
          // Colors handled by compound variants
        },
        outlined: {
          backgroundColor: 'transparent',
          borderWidth: 1,
        },
        dot: {
          minWidth: 8,
          width: 8,
          height: 8,
          padding: 0,
        },
      },
      intent: {
        primary: {
          backgroundColor: theme.intents?.primary?.main || '#3b82f6',
        },
        success: {
          backgroundColor: theme.intents?.success?.main || '#22c55e',
        },
        error: {
          backgroundColor: theme.intents?.error?.main || '#ef4444',
        },
        warning: {
          backgroundColor: theme.intents?.warning?.main || '#f59e0b',
        },
        neutral: {
          backgroundColor: theme.intents?.neutral?.main || '#6b7280',
        },
        info: {
          backgroundColor: theme.intents?.info?.main || '#06b6d4',
        },
      },
    },
    
    compoundVariants: [
      // Outlined variant colors
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
        intent: 'neutral',
        styles: {
          borderColor: theme.intents?.neutral?.main || '#6b7280',
        },
      },
      {
        variant: 'outlined',
        intent: 'info',
        styles: {
          borderColor: theme.intents?.info?.main || '#06b6d4',
        },
      },
    ],
  },
  
  text: {
    color: '#ffffff',
    fontWeight: '600',
    textAlign: 'center',
    
    variants: {
      size: {
        small: {
          fontSize: 10,
        },
        medium: {
          fontSize: 12,
        },
        large: {
          fontSize: 14,
        },
      },
      variant: {
        filled: {
          color: '#ffffff',
        },
        outlined: {
          // Colors handled by compound variants
        },
        dot: {
          // No text for dot variant
        },
      },
    },
    
    compoundVariants: [
      // Outlined variant text colors
      {
        variant: 'outlined',
        intent: 'primary',
        styles: {
          color: theme.intents?.primary?.main || '#3b82f6',
        },
      },
      {
        variant: 'outlined',
        intent: 'success',
        styles: {
          color: theme.intents?.success?.main || '#22c55e',
        },
      },
      {
        variant: 'outlined',
        intent: 'error',
        styles: {
          color: theme.intents?.error?.main || '#ef4444',
        },
      },
      {
        variant: 'outlined',
        intent: 'warning',
        styles: {
          color: theme.intents?.warning?.main || '#f59e0b',
        },
      },
      {
        variant: 'outlined',
        intent: 'neutral',
        styles: {
          color: theme.intents?.neutral?.main || '#6b7280',
        },
      },
      {
        variant: 'outlined',
        intent: 'info',
        styles: {
          color: theme.intents?.info?.main || '#06b6d4',
        },
      },
    ],
  },
})); 