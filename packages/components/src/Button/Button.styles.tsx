import { StyleSheet } from 'react-native-unistyles';

export const buttonStyles = StyleSheet.create((theme) => ({
  button: {
    // Base styles
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius?.md || 8,
    fontWeight: '600',
    textAlign: 'center',
    transition: 'all 0.2s ease',
    
    // All variants defined here
    variants: {
      size: {
        small: {
          paddingHorizontal: theme.spacing?.sm || 8,
          paddingVertical: theme.spacing?.xs || 4,
          minHeight: 24,
        },
        medium: {
          paddingHorizontal: theme.spacing?.md || 12,
          paddingVertical: theme.spacing?.sm || 8,
          minHeight: 32,
        },  
        large: {
          paddingHorizontal: theme.spacing?.lg || 16,
          paddingVertical: theme.spacing?.md || 12,
          minHeight: 40,
        },
      },
      intent: {
        primary: {
          backgroundColor: theme.intents?.primary?.main || '#3b82f6',
          borderColor: theme.intents?.primary?.main || '#3b82f6',
          color: theme.intents?.primary?.on || '#ffffff',
        },
        success: {
          backgroundColor: theme.intents?.success?.main || '#22c55e',
          borderColor: theme.intents?.success?.main || '#22c55e',
          color: theme.intents?.success?.on || '#ffffff',
        },
        error: {
          backgroundColor: theme.intents?.error?.main || '#ef4444',
          borderColor: theme.intents?.error?.main || '#ef4444',
          color: theme.intents?.error?.on || '#ffffff',
        },
        warning: {
          backgroundColor: theme.intents?.warning?.main || '#f59e0b',
          borderColor: theme.intents?.warning?.main || '#f59e0b',
          color: theme.intents?.warning?.on || '#ffffff',
        },
        neutral: {
          backgroundColor: theme.intents?.neutral?.main || '#6b7280',
          borderColor: theme.intents?.neutral?.main || '#6b7280',
          color: theme.intents?.neutral?.on || '#ffffff',
        },
      },
      variant: {
        contained: {
          borderWidth: 1,
        },
        outlined: {
          backgroundColor: 'transparent',
          borderWidth: 1,
        },
        text: {
          backgroundColor: 'transparent',
          borderWidth: 0,
          borderColor: 'transparent',
        },
      },
      disabled: {
        true: {
          opacity: 0.6,
        },
        false: {
          opacity: 1,
        },
      },
    },
    
    // Compound variants for specific combinations
    compoundVariants: [
      // Outlined variant intent colors
      {
        variant: 'outlined',
        intent: 'primary',
        styles: {
          backgroundColor: 'transparent',
          borderColor: theme.intents?.primary?.main || '#3b82f6',
          color: theme.intents?.primary?.main || '#3b82f6',
        },
      },
      {
        variant: 'outlined',
        intent: 'success',
        styles: {
          backgroundColor: 'transparent',
          borderColor: theme.intents?.success?.main || '#22c55e',
          color: theme.intents?.success?.main || '#22c55e',
        },
      },
      {
        variant: 'outlined',
        intent: 'error',
        styles: {
          backgroundColor: 'transparent',
          borderColor: theme.intents?.error?.main || '#ef4444',
          color: theme.intents?.error?.main || '#ef4444',
        },
      },
      {
        variant: 'outlined',
        intent: 'warning',
        styles: {
          backgroundColor: 'transparent',
          borderColor: theme.intents?.warning?.main || '#f59e0b',
          color: theme.intents?.warning?.main || '#f59e0b',
        },
      },
      {
        variant: 'outlined',
        intent: 'neutral',
        styles: {
          backgroundColor: 'transparent',
          borderColor: theme.intents?.neutral?.main || '#6b7280',
          color: theme.intents?.neutral?.main || '#6b7280',
        },
      },
      // Text variant intent colors
      {
        variant: 'text',
        intent: 'primary',
        styles: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          color: theme.intents?.primary?.main || '#3b82f6',
        },
      },
      {
        variant: 'text',
        intent: 'success',
        styles: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          color: theme.intents?.success?.main || '#22c55e',
        },
      },
      {
        variant: 'text',
        intent: 'error',
        styles: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          color: theme.intents?.error?.main || '#ef4444',
        },
      },
      {
        variant: 'text',
        intent: 'warning',
        styles: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          color: theme.intents?.warning?.main || '#f59e0b',
        },
      },
      {
        variant: 'text',
        intent: 'neutral',
        styles: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          color: theme.intents?.neutral?.main || '#6b7280',
        },
      },
    ],
    
    // Web-specific styles
    _web: {
      cursor: 'pointer',
      outline: 'none',
      display: 'flex',
      boxSizing: 'border-box',
      userSelect: 'none',
      _hover: {
        opacity: 0.9,
      },
      _active: {
        transform: 'scale(0.98)',
      },
      _focus: {
        outlineOffset: '2px',
      },
    },
  },
  
  // Separate text style for React Native (no borders, just text properties)
  text: {
    fontWeight: '600',
    textAlign: 'center',
    
    variants: {
      size: {
        small: {
          fontSize: 14,
        },
        medium: {
          fontSize: 16,
        },  
        large: {
          fontSize: 18,
        },
      },
      intent: {
        primary: {
          color: theme.intents?.primary?.on || '#ffffff',
        },
        success: {
          color: theme.intents?.success?.on || '#ffffff',
        },
        error: {
          color: theme.intents?.error?.on || '#ffffff',
        },
        warning: {
          color: theme.intents?.warning?.on || '#ffffff',
        },
        neutral: {
          color: theme.intents?.neutral?.on || '#ffffff',
        },
      },
      variant: {
        contained: {},
        outlined: {},
        text: {},
      },
      disabled: {
        true: {
          opacity: 0.6,
        },
        false: {
          opacity: 1,
        },
      },
    },
    
    // Compound variants for text colors in different variants
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
      // Text variant text colors
      {
        variant: 'text',
        intent: 'primary',
        styles: {
          color: theme.intents?.primary?.main || '#3b82f6',
        },
      },
      {
        variant: 'text',
        intent: 'success',
        styles: {
          color: theme.intents?.success?.main || '#22c55e',
        },
      },
      {
        variant: 'text',
        intent: 'error',
        styles: {
          color: theme.intents?.error?.main || '#ef4444',
        },
      },
      {
        variant: 'text',
        intent: 'warning',
        styles: {
          color: theme.intents?.warning?.main || '#f59e0b',
        },
      },
      {
        variant: 'text',
        intent: 'neutral',
        styles: {
          color: theme.intents?.neutral?.main || '#6b7280',
        },
      },
    ],
  },
})); 