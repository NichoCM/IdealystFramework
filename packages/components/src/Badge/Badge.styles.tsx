import { StyleSheet } from 'react-native-unistyles';
import { generateBadgeCompoundVariants } from '../theme/variantHelpers';

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
      // Dynamically generated color variants (placeholder - actual styling in compound variants)
      color: Object.fromEntries([
        // All palette colors including shade-specific variants
        ...(theme.palettes ? Object.entries(theme.palettes).flatMap(([colorKey, palette]) => [
          // Base color
          [colorKey, {}],
          // All shade variants
          ...Object.keys(palette).map((shade) => [`${colorKey}.${shade}`, {}])
        ]) : [
          // Fallback base colors
          ['blue', {}], ['green', {}], ['red', {}], ['amber', {}], 
          ['gray', {}], ['purple', {}], ['pink', {}], ['cyan', {}]
        ]),
        // Semantic colors
        ['primary', {}],
        ['secondary', {}],
        ['disabled', {}],
        ['inverse', {}],
        ['muted', {}],
      ]),
    },
    
    // Dynamically generated compound variants plus static size variants
    compoundVariants: [
      ...generateBadgeCompoundVariants(theme),
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
      // Outlined variant text colors - dynamically generated
      ...Object.entries(theme.palettes || {}).map(([colorKey, palette]: [string, any]) => ({
        variant: 'outlined',
        color: colorKey,
        styles: {
          color: palette?.[500] || '#6b7280',
        },
      })),
    ],
  },
})); 