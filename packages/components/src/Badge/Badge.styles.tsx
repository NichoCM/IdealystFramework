import { StyleSheet } from 'react-native-unistyles';

export const badgeStyles = StyleSheet.create((theme) => ({
  badge: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
    
    // Web-specific styles for better text centering
    _web: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      // Text styles for web (since text is rendered directly in the container)
      fontSize: 12, // Default medium size
      fontWeight: '600',
      color: '#ffffff',
      lineHeight: 1, // Use ratio instead of fixed value for better centering
    },
    
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
          paddingHorizontal: 0, // Override size variant padding
          paddingVertical: 0,
        },
      },
      intent: {
        primary: {
          // Intent colors only apply to filled badges - handled by compound variants
        },
        success: {
          // Intent colors only apply to filled badges - handled by compound variants
        },
        error: {
          // Intent colors only apply to filled badges - handled by compound variants
        },
        warning: {
          // Intent colors only apply to filled badges - handled by compound variants
        },
        neutral: {
          // Intent colors only apply to filled badges - handled by compound variants
        },
        info: {
          // Intent colors only apply to filled badges - handled by compound variants
        },
      },
    },
    
    compoundVariants: [
      // Filled variant background colors
      {
        variant: 'filled',
        intent: 'primary',
        styles: {
          backgroundColor: theme.intents?.primary?.main || '#3b82f6',
        },
      },
      {
        variant: 'filled',
        intent: 'success',
        styles: {
          backgroundColor: theme.intents?.success?.main || '#22c55e',
        },
      },
      {
        variant: 'filled',
        intent: 'error',
        styles: {
          backgroundColor: theme.intents?.error?.main || '#ef4444',
        },
      },
      {
        variant: 'filled',
        intent: 'warning',
        styles: {
          backgroundColor: theme.intents?.warning?.main || '#f59e0b',
        },
      },
      {
        variant: 'filled',
        intent: 'neutral',
        styles: {
          backgroundColor: theme.intents?.neutral?.main || '#6b7280',
        },
      },
      {
        variant: 'filled',
        intent: 'info',
        styles: {
          backgroundColor: theme.intents?.info?.main || '#06b6d4',
        },
      },
      // Dot variant background colors
      {
        variant: 'dot',
        intent: 'primary',
        styles: {
          backgroundColor: theme.intents?.primary?.main || '#3b82f6',
        },
      },
      {
        variant: 'dot',
        intent: 'success',
        styles: {
          backgroundColor: theme.intents?.success?.main || '#22c55e',
        },
      },
      {
        variant: 'dot',
        intent: 'error',
        styles: {
          backgroundColor: theme.intents?.error?.main || '#ef4444',
        },
      },
      {
        variant: 'dot',
        intent: 'warning',
        styles: {
          backgroundColor: theme.intents?.warning?.main || '#f59e0b',
        },
      },
      {
        variant: 'dot',
        intent: 'neutral',
        styles: {
          backgroundColor: theme.intents?.neutral?.main || '#6b7280',
        },
      },
      {
        variant: 'dot',
        intent: 'info',
        styles: {
          backgroundColor: theme.intents?.info?.main || '#06b6d4',
        },
      },
      // Outlined variant border colors
      {
        variant: 'outlined',
        intent: 'primary',
        styles: {
          borderColor: theme.intents?.primary?.main || '#3b82f6',
          _web: {
            border: `1px solid ${theme.intents?.primary?.main || '#3b82f6'}`,
          },
        },
      },
      {
        variant: 'outlined',
        intent: 'success',
        styles: {
          borderColor: theme.intents?.success?.main || '#22c55e',
          _web: {
            border: `1px solid ${theme.intents?.success?.main || '#22c55e'}`,
          },
        },
      },
      {
        variant: 'outlined',
        intent: 'error',
        styles: {
          borderColor: theme.intents?.error?.main || '#ef4444',
          _web: {
            border: `1px solid ${theme.intents?.error?.main || '#ef4444'}`,
          },
        },
      },
      {
        variant: 'outlined',
        intent: 'warning',
        styles: {
          borderColor: theme.intents?.warning?.main || '#f59e0b',
          _web: {
            border: `1px solid ${theme.intents?.warning?.main || '#f59e0b'}`,
          },
        },
      },
      {
        variant: 'outlined',
        intent: 'neutral',
        styles: {
          borderColor: theme.intents?.neutral?.main || '#6b7280',
          _web: {
            border: `1px solid ${theme.intents?.neutral?.main || '#6b7280'}`,
          },
        },
      },
      {
        variant: 'outlined',
        intent: 'info',
        styles: {
          borderColor: theme.intents?.info?.main || '#06b6d4',
          _web: {
            border: `1px solid ${theme.intents?.info?.main || '#06b6d4'}`,
          },
        },
      },
      
      // Web-specific text size variants
      {
        size: 'small',
        styles: {
          _web: {
            fontSize: 10,
          },
        },
      },
      {
        size: 'medium',
        styles: {
          _web: {
            fontSize: 12,
          },
        },
      },
      {
        size: 'large',
        styles: {
          _web: {
            fontSize: 14,
          },
        },
      },
      
      // Web-specific outlined text colors
      {
        variant: 'outlined',
        intent: 'primary',
        styles: {
          _web: {
            color: theme.intents?.primary?.main || '#3b82f6',
          },
        },
      },
      {
        variant: 'outlined',
        intent: 'success',
        styles: {
          _web: {
            color: theme.intents?.success?.main || '#22c55e',
          },
        },
      },
      {
        variant: 'outlined',
        intent: 'error',
        styles: {
          _web: {
            color: theme.intents?.error?.main || '#ef4444',
          },
        },
      },
      {
        variant: 'outlined',
        intent: 'warning',
        styles: {
          _web: {
            color: theme.intents?.warning?.main || '#f59e0b',
          },
        },
      },
      {
        variant: 'outlined',
        intent: 'neutral',
        styles: {
          _web: {
            color: theme.intents?.neutral?.main || '#6b7280',
          },
        },
      },
      {
        variant: 'outlined',
        intent: 'info',
        styles: {
          _web: {
            color: theme.intents?.info?.main || '#06b6d4',
          },
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
          lineHeight: 12, // Tight line height for better vertical centering
        },
        medium: {
          fontSize: 12,
          lineHeight: 14,
        },
        large: {
          fontSize: 14,
          lineHeight: 16,
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