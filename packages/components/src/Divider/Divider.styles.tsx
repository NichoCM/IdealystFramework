import { StyleSheet } from 'react-native-unistyles';

export const dividerStyles = StyleSheet.create((theme) => ({
  divider: {
    backgroundColor: theme.colors?.border?.primary || theme.palettes?.gray?.[300] || '#d1d5db',
    
    variants: {
      orientation: {
        horizontal: {
          width: '100%',
          height: 1,
          flexDirection: 'row',
        },
        vertical: {
          width: 1,
          height: '100%',
          flexDirection: 'column',
        },
      },
      thickness: {
        thin: {
          // Handled by orientation compound variants
        },
        medium: {
          // Handled by orientation compound variants
        },
        thick: {
          // Handled by orientation compound variants
        },
      },
      variant: {
        solid: {
          // Default solid style
        },
        dashed: {
          // Handled by platform-specific styles
        },
        dotted: {
          // Handled by platform-specific styles
        },
      },
      intent: {
        primary: {
          backgroundColor: theme.colors?.border?.primary || theme.palettes?.gray?.[300] || '#d1d5db',
        },
        secondary: {
          backgroundColor: theme.colors?.border?.secondary || theme.palettes?.gray?.[200] || '#e5e7eb',
        },
        neutral: {
          backgroundColor: theme.colors?.border?.primary || theme.palettes?.gray?.[300] || '#d1d5db',
        },
        success: {
          backgroundColor: theme.intents?.success?.border || theme.palettes?.green?.[300] || '#86efac',
        },
        error: {
          backgroundColor: theme.intents?.error?.border || theme.palettes?.red?.[300] || '#fca5a5',
        },
        warning: {
          backgroundColor: theme.intents?.warning?.border || theme.palettes?.amber?.[300] || '#fcd34d',
        },
        info: {
          backgroundColor: theme.intents?.info?.border || theme.palettes?.cyan?.[300] || '#67e8f9',
        },
      },
      length: {
        full: {
          // Default full length
        },
        auto: {
          // Auto length handled by parent container
        },
      },
      spacing: {
        none: {
          margin: 0,
        },
        small: {
          // Handled by orientation compound variants
        },
        medium: {
          // Handled by orientation compound variants
        },
        large: {
          // Handled by orientation compound variants
        },
      },
    },
    
    compoundVariants: [
      // Horizontal thickness variants
      {
        orientation: 'horizontal',
        thickness: 'thin',
        styles: {
          height: 1,
        },
      },
      {
        orientation: 'horizontal',
        thickness: 'medium',
        styles: {
          height: 2,
        },
      },
      {
        orientation: 'horizontal',
        thickness: 'thick',
        styles: {
          height: 4,
        },
      },
      // Vertical thickness variants
      {
        orientation: 'vertical',
        thickness: 'thin',
        styles: {
          width: 1,
        },
      },
      {
        orientation: 'vertical',
        thickness: 'medium',
        styles: {
          width: 2,
        },
      },
      {
        orientation: 'vertical',
        thickness: 'thick',
        styles: {
          width: 4,
        },
      },
      // Horizontal spacing variants
      {
        orientation: 'horizontal',
        spacing: 'small',
        styles: {
          marginVertical: theme.spacing?.sm || 8,
        },
      },
      {
        orientation: 'horizontal',
        spacing: 'medium',
        styles: {
          marginVertical: theme.spacing?.md || 12,
        },
      },
      {
        orientation: 'horizontal',
        spacing: 'large',
        styles: {
          marginVertical: theme.spacing?.lg || 16,
        },
      },
      // Vertical spacing variants
      {
        orientation: 'vertical',
        spacing: 'small',
        styles: {
          marginHorizontal: theme.spacing?.sm || 8,
        },
      },
      {
        orientation: 'vertical',
        spacing: 'medium',
        styles: {
          marginHorizontal: theme.spacing?.md || 12,
        },
      },
      {
        orientation: 'vertical',
        spacing: 'large',
        styles: {
          marginHorizontal: theme.spacing?.lg || 16,
        },
      },
      // Dashed variant styles
      {
        variant: 'dashed',
        styles: {
          backgroundColor: 'transparent',
        },
      },
      // Dotted variant styles
      {
        variant: 'dotted',
        styles: {
          backgroundColor: 'transparent',
        },
      },
    ],
    
    _web: {
      // Web-specific styles for dashed and dotted variants
    },
  },
  
  // Container for dividers with content
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    
    variants: {
      orientation: {
        horizontal: {
          flexDirection: 'row',
          width: '100%',
        },
        vertical: {
          flexDirection: 'column',
          height: '100%',
        },
      },
      spacing: {
        none: {
          gap: 0,
        },
        small: {
          gap: theme.spacing?.sm || 8,
        },
        medium: {
          gap: theme.spacing?.md || 12,
        },
        large: {
          gap: theme.spacing?.lg || 16,
        },
      },
    },
  },
  
  // Content styling for dividers with children
  content: {
    backgroundColor: theme.colors?.surface?.primary || '#ffffff',
    color: theme.colors?.text?.secondary || theme.palettes?.gray?.[600] || '#4b5563',
    fontSize: theme.typography?.fontSize?.sm || 14,
    
    variants: {
      orientation: {
        horizontal: {
          paddingHorizontal: theme.spacing?.sm || 8,
        },
        vertical: {
          paddingVertical: theme.spacing?.sm || 8,
        },
      },
    },
  },
  
  // Line segments for dividers with content
  line: {
    backgroundColor: theme.colors?.border?.primary || theme.palettes?.gray?.[300] || '#d1d5db',
    flex: 1,
    
    variants: {
      orientation: {
        horizontal: {
          height: 1,
        },
        vertical: {
          width: 1,
        },
      },
      thickness: {
        thin: {
          // Handled by orientation compound variants
        },
        medium: {
          // Handled by orientation compound variants
        },
        thick: {
          // Handled by orientation compound variants
        },
      },
    },
    
    compoundVariants: [
      // Horizontal thickness for line segments
      {
        orientation: 'horizontal',
        thickness: 'thin',
        styles: {
          height: 1,
        },
      },
      {
        orientation: 'horizontal',
        thickness: 'medium',
        styles: {
          height: 2,
        },
      },
      {
        orientation: 'horizontal',
        thickness: 'thick',
        styles: {
          height: 4,
        },
      },
      // Vertical thickness for line segments
      {
        orientation: 'vertical',
        thickness: 'thin',
        styles: {
          width: 1,
        },
      },
      {
        orientation: 'vertical',
        thickness: 'medium',
        styles: {
          width: 2,
        },
      },
      {
        orientation: 'vertical',
        thickness: 'thick',
        styles: {
          width: 4,
        },
      },
    ],
  },
}));

// Web-specific styles for dashed and dotted variants
export const dividerWebStyles = StyleSheet.create((theme) => ({
  dashed: {
    _web: {
      border: 'none',
      borderTop: `1px dashed ${theme.colors?.border?.primary || theme.palettes?.gray?.[300] || '#d1d5db'}`,
      backgroundColor: 'transparent',
      
      variants: {
        orientation: {
          horizontal: {
            borderTop: `1px dashed ${theme.colors?.border?.primary || theme.palettes?.gray?.[300] || '#d1d5db'}`,
            borderLeft: 'none',
          },
          vertical: {
            borderLeft: `1px dashed ${theme.colors?.border?.primary || theme.palettes?.gray?.[300] || '#d1d5db'}`,
            borderTop: 'none',
          },
        },
      },
    },
  },
  
  dotted: {
    _web: {
      border: 'none',
      borderTop: `1px dotted ${theme.colors?.border?.primary || theme.palettes?.gray?.[300] || '#d1d5db'}`,
      backgroundColor: 'transparent',
      
      variants: {
        orientation: {
          horizontal: {
            borderTop: `1px dotted ${theme.colors?.border?.primary || theme.palettes?.gray?.[300] || '#d1d5db'}`,
            borderLeft: 'none',
          },
          vertical: {
            borderLeft: `1px dotted ${theme.colors?.border?.primary || theme.palettes?.gray?.[300] || '#d1d5db'}`,
            borderTop: 'none',
          },
        },
      },
    },
  },
})); 