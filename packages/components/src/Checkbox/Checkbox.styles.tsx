import { StyleSheet } from 'react-native-unistyles';

export const checkboxStyles = StyleSheet.create((theme) => ({
  wrapper: {
    flexDirection: 'column',
    gap: theme.spacing?.xs || 4,
  },
  
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing?.sm || 8,
  },
  
  checkbox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius?.sm || 4,
    position: 'relative',
    transition: 'all 0.2s ease',
    
    variants: {
      size: {
        small: {
          width: 16,
          height: 16,
        },
        medium: {
          width: 20,
          height: 20,
        },
        large: {
          width: 24,
          height: 24,
        },
      },
      intent: {
        primary: {
          backgroundColor: 'transparent',
          borderColor: theme.colors?.border?.primary || theme.palettes?.gray?.[300] || '#d1d5db',
        },
        success: {
          backgroundColor: 'transparent',
          borderColor: theme.colors?.border?.primary || theme.palettes?.gray?.[300] || '#d1d5db',
        },
        error: {
          backgroundColor: 'transparent',
          borderColor: theme.colors?.border?.primary || theme.palettes?.gray?.[300] || '#d1d5db',
        },
        warning: {
          backgroundColor: 'transparent',
          borderColor: theme.colors?.border?.primary || theme.palettes?.gray?.[300] || '#d1d5db',
        },
        neutral: {
          backgroundColor: 'transparent',
          borderColor: theme.colors?.border?.primary || theme.palettes?.gray?.[300] || '#d1d5db',
        },
        info: {
          backgroundColor: 'transparent',
          borderColor: theme.colors?.border?.primary || theme.palettes?.gray?.[300] || '#d1d5db',
        },
      },
      variant: {
        default: {
          border: `1px solid ${theme.colors?.border?.primary || theme.palettes?.gray?.[300] || '#d1d5db'}`,
        },
        outlined: {
          border: `2px solid ${theme.colors?.border?.primary || theme.palettes?.gray?.[300] || '#d1d5db'}`,
        },
      },
      checked: {
        true: {
          // Checked state handled by compound variants
        },
        false: {
          backgroundColor: 'transparent',
        },
      },
      disabled: {
        true: {
          opacity: 0.5,
        },
        false: {
          opacity: 1,
        },
      },
    },
    
    compoundVariants: [
      // Checked state for each intent
      {
        checked: true,
        intent: 'primary',
        styles: {
          backgroundColor: theme.intents?.primary?.main || '#3b82f6',
          borderColor: theme.intents?.primary?.main || '#3b82f6',
        },
      },
      {
        checked: true,
        intent: 'success',
        styles: {
          backgroundColor: theme.intents?.success?.main || '#22c55e',
          borderColor: theme.intents?.success?.main || '#22c55e',
        },
      },
      {
        checked: true,
        intent: 'error',
        styles: {
          backgroundColor: theme.intents?.error?.main || '#ef4444',
          borderColor: theme.intents?.error?.main || '#ef4444',
        },
      },
      {
        checked: true,
        intent: 'warning',
        styles: {
          backgroundColor: theme.intents?.warning?.main || '#f59e0b',
          borderColor: theme.intents?.warning?.main || '#f59e0b',
        },
      },
      {
        checked: true,
        intent: 'neutral',
        styles: {
          backgroundColor: theme.intents?.neutral?.main || '#6b7280',
          borderColor: theme.intents?.neutral?.main || '#6b7280',
        },
      },
      {
        checked: true,
        intent: 'info',
        styles: {
          backgroundColor: theme.intents?.info?.main || '#06b6d4',
          borderColor: theme.intents?.info?.main || '#06b6d4',
        },
      },
    ],
    
    _web: {
      cursor: 'pointer',
      outline: 'none',
      display: 'flex',
      boxSizing: 'border-box',
      userSelect: 'none',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      appearance: 'none',
      _hover: {
        opacity: 0.8,
      },
      _focus: {
        outline: `2px solid ${theme.intents?.primary?.main || '#3b82f6'}`,
        outlineOffset: '2px',
      },
    },
  },
}));

export const checkboxLabelStyles = StyleSheet.create((theme) => ({
  label: {
    flex: 1,
    color: theme.colors?.text?.primary || theme.palettes?.gray?.[900] || '#111827',
    
    variants: {
      size: {
        small: {
          fontSize: theme.typography?.fontSize?.sm || 14,
        },
        medium: {
          fontSize: theme.typography?.fontSize?.md || 16,
        },
        large: {
          fontSize: theme.typography?.fontSize?.lg || 18,
        },
      },
      disabled: {
        true: {
          color: theme.colors?.text?.disabled || theme.palettes?.gray?.[400] || '#9ca3af',
        },
        false: {
          color: theme.colors?.text?.primary || theme.palettes?.gray?.[900] || '#111827',
        },
      },
    },
  },
}));

export const checkboxCheckmarkStyles = StyleSheet.create((theme) => ({
  checkmark: {
    position: 'absolute',
    color: '#ffffff',
    fontWeight: 'bold',
    
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
      visible: {
        true: {
          opacity: 1,
        },
        false: {
          opacity: 0,
        },
      },
    },
  },
}));

export const checkboxHelperStyles = StyleSheet.create((theme) => ({
  helperText: {
    fontSize: theme.typography?.fontSize?.sm || 14,
    color: theme.colors?.text?.secondary || theme.palettes?.gray?.[600] || '#4b5563',
    marginTop: theme.spacing?.xs || 4,
    
    variants: {
      error: {
        true: {
          color: theme.intents?.error?.main || '#ef4444',
        },
        false: {
          color: theme.colors?.text?.secondary || theme.palettes?.gray?.[600] || '#4b5563',
        },
      },
    },
  },
})); 