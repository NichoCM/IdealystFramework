// Example usage of the default themes in components
import { StyleSheet } from 'react-native-unistyles';
import { defaultLightTheme, defaultDarkTheme } from './defaultThemes';

// Example 1: Card component using the theme
export const cardExampleStyles = StyleSheet.create((theme) => ({
  card: {
    backgroundColor: theme.colors.surface.elevated,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border.primary,
    ...theme.shadows.md,
  },
  
  cardTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.sm,
  },
  
  cardContent: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.text.secondary,
    lineHeight: theme.typography.lineHeight.normal,
    marginBottom: theme.spacing.md,
  },
  
  cardActions: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
}));

// Example 2: Alert component using intents
export const alertExampleStyles = StyleSheet.create((theme) => ({
  alert: {
    variants: {
      intent: {
        success: {
          backgroundColor: theme.intents.success.container,
          borderColor: theme.intents.success.border,
          borderLeftWidth: 4,
          borderLeftColor: theme.intents.success.main,
        },
        error: {
          backgroundColor: theme.intents.error.container,
          borderColor: theme.intents.error.border,
          borderLeftWidth: 4,
          borderLeftColor: theme.intents.error.main,
        },
        warning: {
          backgroundColor: theme.intents.warning.container,
          borderColor: theme.intents.warning.border,
          borderLeftWidth: 4,
          borderLeftColor: theme.intents.warning.main,
        },
        info: {
          backgroundColor: theme.intents.info.container,
          borderColor: theme.intents.info.border,
          borderLeftWidth: 4,
          borderLeftColor: theme.intents.info.main,
        },
      },
    },
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
  },
  
  alertText: {
    variants: {
      intent: {
        success: {
          color: theme.intents.success.onContainer,
        },
        error: {
          color: theme.intents.error.onContainer,
        },
        warning: {
          color: theme.intents.warning.onContainer,
        },
        info: {
          color: theme.intents.info.onContainer,
        },
      },
    },
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.medium,
  },
}));

// Example 3: Form component using theme colors
export const formExampleStyles = StyleSheet.create((theme) => ({
  formContainer: {
    backgroundColor: theme.colors.surface.primary,
    padding: theme.spacing.lg,
  },
  
  formField: {
    marginBottom: theme.spacing.md,
  },
  
  label: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border.primary,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.sm,
    fontSize: theme.typography.fontSize.md,
    backgroundColor: theme.colors.surface.primary,
    color: theme.colors.text.primary,
    
    _web: {
      transition: theme.transitions.base,
      _focus: {
        borderColor: theme.colors.border.focus,
        outline: `2px solid ${theme.intents.primary.light}`,
        outlineOffset: '2px',
      },
      _hover: {
        borderColor: theme.colors.border.secondary,
      },
    },
  },
  
  inputError: {
    borderColor: theme.intents.error.main,
    backgroundColor: theme.intents.error.container,
  },
  
  errorText: {
    color: theme.intents.error.main,
    fontSize: theme.typography.fontSize.sm,
    marginTop: theme.spacing.xs,
  },
  
  helpText: {
    color: theme.colors.text.muted,
    fontSize: theme.typography.fontSize.sm,
    marginTop: theme.spacing.xs,
  },
}));

// Example 4: Navigation component
export const navigationExampleStyles = StyleSheet.create((theme) => ({
  navbar: {
    backgroundColor: theme.colors.surface.primary,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border.primary,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    ...theme.shadows.sm,
  },
  
  navItem: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    
    _web: {
      transition: theme.transitions.base,
      _hover: {
        backgroundColor: theme.colors.interactive.hover,
      },
    },
  },
  
  navItemActive: {
    backgroundColor: theme.intents.primary.container,
  },
  
  navText: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.text.secondary,
  },
  
  navTextActive: {
    color: theme.intents.primary.onContainer,
    fontWeight: theme.typography.fontWeight.semibold,
  },
}));

// Example 5: Theme comparison helper
export function compareThemes() {
  console.group('🌞 Light Theme Colors');
  console.log('Primary:', defaultLightTheme.intents.primary.main);
  console.log('Success:', defaultLightTheme.intents.success.main);
  console.log('Error:', defaultLightTheme.intents.error.main);
  console.log('Text Primary:', defaultLightTheme.colors.text.primary);
  console.log('Background:', defaultLightTheme.colors.surface.primary);
  console.groupEnd();
  
  console.group('🌙 Dark Theme Colors');
  console.log('Primary:', defaultDarkTheme.intents.primary.main);
  console.log('Success:', defaultDarkTheme.intents.success.main);
  console.log('Error:', defaultDarkTheme.intents.error.main);
  console.log('Text Primary:', defaultDarkTheme.colors.text.primary);
  console.log('Background:', defaultDarkTheme.colors.surface.primary);
  console.groupEnd();
}

// Example 6: Custom theme creation
export function createBrandTheme(brandColor: string) {
  return {
    ...defaultLightTheme,
    intents: {
      ...defaultLightTheme.intents,
      primary: {
        main: brandColor,
        on: '#ffffff',
        container: `${brandColor}20`, // 20% opacity
        onContainer: brandColor,
        light: `${brandColor}40`,
        dark: brandColor,
        border: `${brandColor}60`,
      },
    },
    colors: {
      ...defaultLightTheme.colors,
      primary: brandColor,
    },
  };
}

// Example 7: Dynamic theme switching
export class ThemeManager {
  private currentTheme: 'light' | 'dark' = 'light';
  
  getTheme() {
    return this.currentTheme === 'light' ? defaultLightTheme : defaultDarkTheme;
  }
  
  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    return this.getTheme();
  }
  
  setTheme(theme: 'light' | 'dark') {
    this.currentTheme = theme;
    return this.getTheme();
  }
}

// Example usage in a component
export const ExampleComponent = () => {
  /*
  return (
    <View style={cardExampleStyles.card}>
      <Text style={cardExampleStyles.cardTitle}>Card Title</Text>
      <Text style={cardExampleStyles.cardContent}>
        This card demonstrates how to use the default theme in a component.
      </Text>
      <View style={cardExampleStyles.cardActions}>
        <Button variant="contained" intent="primary">Primary Action</Button>
        <Button variant="outlined" intent="neutral">Secondary</Button>
      </View>
    </View>
  );
  */
}; 