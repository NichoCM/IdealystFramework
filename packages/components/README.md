# IdealystFramework Design System

A comprehensive, cross-platform design system built with React Native Unistyles 3.0, providing consistent styling across web and native platforms.

## 🏗️ Architecture Overview

The design system follows a **palette-based intent system** architecture:

- **Color Palettes**: 8 foundational color palettes with 10 shades each
- **Intent System**: Semantic colors for actionable components (buttons, alerts, etc.)
- **Color System**: Display colors for text, surfaces, borders, and interactive states
- **Variant System**: Component variations (contained, outlined, text, etc.)
- **Cross-Platform**: Single codebase with platform-specific optimizations

## 🎨 Color System Philosophy

### Intent vs Color Distinction

**Intents** (for actionable components):
- Used for buttons, alerts, checkboxes, form controls
- Contextual meaning (primary, success, error, warning, neutral, info)
- Includes semantic properties (main, on, container, onContainer, light, dark, border)

**Colors** (for display components):
- Used for text, surfaces, borders, backgrounds
- Descriptive properties (text.primary, surface.secondary, border.focus)
- No semantic meaning, purely visual hierarchy

### Palette Structure

```typescript
// Example: Blue palette with 10 shades
theme.palettes.blue = {
  50: '#eff6ff',   // Lightest
  100: '#dbeafe',
  200: '#bfdbfe',
  300: '#93c5fd',
  400: '#60a5fa',
  500: '#3b82f6',  // Base shade
  600: '#2563eb',
  700: '#1d4ed8',
  800: '#1e40af',
  900: '#1e3a8a',  // Darkest
}
```

### Intent Color Structure

```typescript
theme.intents.primary = {
  main: '#3b82f6',      // Primary action color (blue.500)
  on: '#ffffff',        // Text color on main background
  container: '#eff6ff', // Light background version (blue.50)
  onContainer: '#1e3a8a', // Text color on container (blue.900)
  light: '#dbeafe',     // Lighter accent (blue.100)
  dark: '#1d4ed8',      // Darker accent (blue.700)
  border: '#bfdbfe',    // Border color (blue.200)
}
```

## 🔧 Technical Implementation

### Unistyles 3.0 Integration

The system uses React Native Unistyles 3.0 with proper Shadow Tree integration:

```typescript
// ✅ Correct Unistyles 3.0 pattern
export const buttonStyles = StyleSheet.create((theme) => ({
  button: {
    // Base styles
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius?.md || 8,
    
    // Variants system
    variants: {
      size: {
        small: { paddingHorizontal: 8, paddingVertical: 4 },
        medium: { paddingHorizontal: 12, paddingVertical: 8 },
        large: { paddingHorizontal: 16, paddingVertical: 12 },
      },
      intent: {
        primary: {
          backgroundColor: theme.intents?.primary?.main || '#3b82f6',
          color: theme.intents?.primary?.on || '#ffffff',
        },
        // ... other intents
      },
      variant: {
        contained: { border: 'none' },
        outlined: { backgroundColor: 'transparent' },
        text: { backgroundColor: 'transparent', border: 'none' },
      },
    },
    
    // Compound variants for complex combinations
    compoundVariants: [
      {
        variant: 'outlined',
        intent: 'primary',
        styles: {
          backgroundColor: 'transparent',
          border: `1px solid ${theme.intents?.primary?.main || '#3b82f6'}`,
          color: theme.intents?.primary?.main || '#3b82f6',
        },
      },
      // ... other combinations
    ],
    
    // Platform-specific styles
    _web: {
      cursor: 'pointer',
      outline: 'none',
      display: 'flex',
      boxSizing: 'border-box',
      _hover: { opacity: 0.9 },
      _active: { transform: 'scale(0.98)' },
      _focus: { outlineOffset: '2px' },
    },
  },
}));
```

### Component Implementation Pattern

#### Web Components (with getWebProps)

```typescript
// ✅ Correct web component pattern
import { getWebProps } from 'react-native-unistyles/web';

const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  intent = 'primary',
  size = 'medium',
  disabled = false,
  style,
  ...props
}) => {
  // Apply variants
  buttonStyles.useVariants({
    size: size as 'small' | 'medium' | 'large',
    intent: intent as 'primary' | 'success' | 'error' | 'warning' | 'neutral',
    variant: variant as 'contained' | 'outlined' | 'text',
    disabled: disabled as boolean,
  });

  // Create style array
  const styleArray = [
    buttonStyles.button,
    style,
  ];

  // Generate web props
  const webProps = getWebProps(styleArray);

  return (
    <button {...webProps} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
```

#### Native Components

```typescript
// ✅ Correct native component pattern
import { Pressable, Text } from 'react-native';

const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  intent = 'primary',
  size = 'medium',
  disabled = false,
  style,
  ...props
}) => {
  // Apply variants
  buttonStyles.useVariants({
    size, intent, variant, disabled,
  });

  return (
    <Pressable style={[buttonStyles.button, style]} disabled={disabled} {...props}>
      <Text style={buttonStyles.text}>{children}</Text>
    </Pressable>
  );
};
```

## 🎯 Best Practices

### 1. Border Styling

**❌ Avoid separate border properties:**
```typescript
// Don't do this - causes double borders in some browsers
variant: {
  outlined: { borderWidth: 1 },
},
compoundVariants: [
  { variant: 'outlined', intent: 'primary', styles: { borderColor: 'blue' } }
]
```

**✅ Use border shorthand:**
```typescript
// Do this - single border declaration
variant: {
  outlined: { /* no border props */ },
},
compoundVariants: [
  { 
    variant: 'outlined', 
    intent: 'primary', 
    styles: { border: '1px solid blue' } 
  }
]
```

### 2. Theme Color Resolution

**✅ Use theme colors with fallbacks:**
```typescript
// Always provide fallbacks for theme colors
backgroundColor: theme.intents?.primary?.main || '#3b82f6',
color: theme.colors?.text?.primary || '#000000',
```

### 3. Platform-Specific Considerations

**Web-specific styles:**
```typescript
_web: {
  cursor: 'pointer',
  outline: 'none',
  display: 'flex',
  boxSizing: 'border-box',
  userSelect: 'none',
  _hover: { opacity: 0.9 },
  _active: { transform: 'scale(0.98)' },
  _focus: { outlineOffset: '2px' },
}
```

**Native-specific considerations:**
- Use separate `<Text>` components for button text
- Handle press states with `Pressable` component
- No CSS pseudo-classes available

### 4. Variant System Guidelines

**Single responsibility:**
- `size`: Controls dimensions and padding
- `intent`: Controls color scheme and meaning
- `variant`: Controls visual style (contained, outlined, text)

**Compound variants for complex combinations:**
```typescript
compoundVariants: [
  {
    variant: 'outlined',
    intent: 'primary',
    styles: {
      // Specific styles for outlined + primary combination
    },
  },
]
```

## 🚀 Usage Examples

### Basic Component Usage

```typescript
// Button variants
<Button variant="contained" intent="primary">Save</Button>
<Button variant="outlined" intent="success">Confirm</Button>
<Button variant="text" intent="error">Delete</Button>

// Input variants
<Input variant="default" size="medium" />
<Input variant="outlined" size="large" hasError />
<Input variant="filled" size="small" />

// Text variants
<Text size="xl" weight="bold" colorVariant="primary">Heading</Text>
<Text size="md" colorVariant="secondary">Description</Text>
```

### Custom Styling

```typescript
// Using theme in custom StyleSheet
const styles = StyleSheet.create((theme) => ({
  card: {
    backgroundColor: theme.colors.surface.primary,
    borderColor: theme.colors.border.primary,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    // Use border shorthand
    border: `1px solid ${theme.colors.border.primary}`,
  },
  title: {
    color: theme.colors.text.primary,
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
  },
  button: {
    backgroundColor: theme.intents.primary.main,
    color: theme.intents.primary.on,
    // Single border declaration
    border: `1px solid ${theme.intents.primary.main}`,
  },
}));
```

### Theme Switching

```typescript
import { UnistylesRuntime } from 'react-native-unistyles';

// Switch between themes
const toggleTheme = () => {
  UnistylesRuntime.setTheme(
    UnistylesRuntime.themeName === 'light' ? 'dark' : 'light'
  );
};
```

## 🛠️ Troubleshooting

### Common Issues

1. **Double borders on web:**
   - Use `border` shorthand instead of separate `borderWidth`/`borderColor`
   - Ensure only one border declaration per variant

2. **Variants not applying:**
   - Check that `useVariants()` is called before rendering
   - Verify variant names match the StyleSheet definitions
   - Use type assertions for TypeScript compliance

3. **Theme colors not resolving:**
   - Always provide fallback colors
   - Check theme structure matches expected format
   - Verify theme is properly imported and configured

4. **Web styles not working:**
   - Ensure `getWebProps` is used for web components
   - Check that `react-native-unistyles/web` is imported
   - Verify style arrays are properly structured

### Performance Optimization

- Use `React.memo` for components with complex styling
- Avoid inline style objects that change on every render
- Prefer theme colors over hardcoded values
- Use compound variants instead of complex conditional logic

## 📚 API Reference

### Theme Structure

```typescript
interface Theme {
  palettes: ColorPalettes;
  intents: IntentColors;
  colors: DisplayColors;
  spacing: SpacingScale;
  borderRadius: BorderRadiusScale;
  typography: TypographyScale;
  shadows: ShadowScale;
  transitions: TransitionScale;
}
```

### Component Props

```typescript
interface ButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  intent?: 'primary' | 'success' | 'error' | 'warning' | 'neutral' | 'info';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children?: ReactNode;
  style?: any;
  onPress?: () => void;
}
```

## 🔗 Related Documentation

- [Theme System Details](./src/theme/README.md)
- [Color System](./src/theme/colors.ts)
- [Component Examples](./src/DemoView/DemoView.tsx)
- [Platform Setup](./THEME_SETUP.md)

## 🎯 Design Principles

1. **Consistency**: Same visual language across platforms
2. **Accessibility**: WCAG compliant contrast ratios
3. **Scalability**: Easy to extend with new components/variants
4. **Performance**: Optimized for both web and native platforms
5. **Developer Experience**: Clear APIs with TypeScript support
6. **Maintainability**: Single source of truth for design tokens 