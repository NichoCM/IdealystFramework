# Default Themes

The design system includes comprehensive default light and dark themes that are production-ready and follow accessibility best practices.

## Features

- **🎨 Complete Color System**: 8 color palettes with 10 shades each
- **🌗 Light/Dark Support**: Optimized colors for both themes
- **🎯 Intent-Based**: Semantic color system for actionable components
- **📱 Cross-Platform**: Works seamlessly on web and React Native
- **♿ Accessible**: Proper contrast ratios built-in
- **🔧 Customizable**: Easy to extend and modify

## Quick Start

```javascript
import { defaultLightTheme, defaultDarkTheme } from '@idealyst/components';

// The themes are already configured and ready to use
console.log(defaultLightTheme.colors.primary); // #3b82f6
console.log(defaultDarkTheme.colors.primary);  // #60a5fa
```

## Theme Structure

### Color Palettes
```javascript
theme.palettes = {
  blue: { 50: '#eff6ff', 500: '#3b82f6', 900: '#1e3a8a' },
  green: { 50: '#f0fdf4', 500: '#22c55e', 900: '#14532d' },
  red: { 50: '#fef2f2', 500: '#ef4444', 900: '#7f1d1d' },
  amber: { 50: '#fffbeb', 500: '#f59e0b', 900: '#78350f' },
  gray: { 50: '#f9fafb', 500: '#6b7280', 900: '#111827' },
  // ... plus cyan, purple, pink
}
```

### Intent System (for actionable components)
```javascript
theme.intents = {
  primary: {
    main: '#3b82f6',      // Main button color
    on: '#ffffff',        // Text on main color
    container: '#eff6ff', // Light background
    onContainer: '#1e3a8a', // Text on light background
    light: '#dbeafe',     // Lighter accent
    dark: '#1d4ed8',      // Darker accent
    border: '#bfdbfe',    // Border color
  },
  success: { /* green colors */ },
  error: { /* red colors */ },
  warning: { /* amber colors */ },
  neutral: { /* gray colors */ },
  info: { /* cyan colors */ },
}
```

### Color System (for display components)
```javascript
theme.colors = {
  text: {
    primary: '#111827',     // Main text color
    secondary: '#4b5563',   // Secondary text
    disabled: '#9ca3af',    // Disabled text
    inverse: '#ffffff',     // Text on dark backgrounds
    muted: '#6b7280',       // Muted text
    placeholder: '#9ca3af', // Placeholder text
  },
  surface: {
    primary: '#ffffff',     // Main background
    secondary: '#f9fafb',   // Secondary background
    tertiary: '#f3f4f6',    // Tertiary background
    elevated: '#ffffff',    // Cards, modals
    overlay: 'rgba(0,0,0,0.5)', // Modal overlays
    inverse: '#111827',     // Dark backgrounds
  },
  border: {
    primary: '#e5e7eb',     // Main borders
    secondary: '#d1d5db',   // Secondary borders
    strong: '#9ca3af',      // Strong borders
    focus: '#3b82f6',       // Focus borders
    disabled: '#e5e7eb',    // Disabled borders
  },
  interactive: {
    hover: '#f9fafb',       // Hover backgrounds
    pressed: '#f3f4f6',     // Pressed backgrounds
    focus: '#3b82f6',       // Focus colors
    disabled: '#f3f4f6',    // Disabled backgrounds
  },
}
```

### Other Properties
```javascript
theme.spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 40 }
theme.borderRadius = { xs: 2, sm: 4, md: 8, lg: 12, xl: 16, xxl: 20 }
theme.typography = {
  fontSize: { xs: 12, sm: 14, md: 16, lg: 18, xl: 20, xxl: 24 },
  fontWeight: { light: '300', regular: '400', medium: '500', semibold: '600', bold: '700' },
}
theme.shadows = { sm: {}, md: {}, lg: {} }
theme.transitions = { fast: '0.15s ease', base: '0.2s ease', slow: '0.3s ease' }
```

## Usage Examples

### Button Component
```javascript
// Different variants with intents
<Button variant="contained" intent="primary">Save</Button>
<Button variant="outlined" intent="success">Confirm</Button>
<Button variant="text" intent="error">Delete</Button>
```

### Text Component
```javascript
// Different variants with colors
<Text variant="h1" color="primary">Heading</Text>
<Text variant="body1" color="text.secondary">Description</Text>
<Text variant="caption" color="error">Error message</Text>
```

### Custom Styling
```javascript
// Using theme in StyleSheet
const styles = StyleSheet.create((theme) => ({
  container: {
    backgroundColor: theme.colors.surface.primary,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    borderColor: theme.colors.border.primary,
  },
  title: {
    color: theme.colors.text.primary,
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.semibold,
  },
  button: {
    backgroundColor: theme.intents.primary.main,
    color: theme.intents.primary.on,
  },
}));
```

## Customization

### Override Colors
```javascript
import { createDefaultLightTheme } from '@idealyst/components';

const customTheme = {
  ...createDefaultLightTheme(),
  intents: {
    ...createDefaultLightTheme().intents,
    primary: {
      main: '#8b5cf6',      // Purple instead of blue
      on: '#ffffff',
      container: '#f3e8ff',
      onContainer: '#581c87',
      // ... other properties
    },
  },
};
```

### Custom Palette
```javascript
import { createDefaultLightTheme, defaultLightPalettes } from '@idealyst/components';

const customPalettes = {
  ...defaultLightPalettes,
  brand: {
    50: '#fef7ff',
    500: '#8b5cf6',
    900: '#581c87',
  },
};

// Create theme with custom palette
const customTheme = createThemeWithPalettes(customPalettes);
```

### Brand Colors
```javascript
// Easy brand color customization
const brandTheme = {
  ...defaultLightTheme,
  colors: {
    ...defaultLightTheme.colors,
    primary: '#your-brand-color',
  },
  intents: {
    ...defaultLightTheme.intents,
    primary: {
      main: '#your-brand-color',
      on: '#ffffff',
      // ... computed from your brand color
    },
  },
};
```

## Dark Theme Differences

The dark theme automatically adjusts:
- **Text colors**: Light text on dark backgrounds
- **Surface colors**: Dark backgrounds with proper contrast
- **Intent colors**: Adjusted brightness for dark backgrounds
- **Border colors**: Visible borders on dark surfaces

```javascript
// Light theme
lightTheme.colors.text.primary    // '#111827' (dark text)
lightTheme.colors.surface.primary // '#ffffff' (white background)

// Dark theme  
darkTheme.colors.text.primary     // '#fafafa' (light text)
darkTheme.colors.surface.primary  // '#18181b' (dark background)
```

## Accessibility

The default themes follow WCAG guidelines:
- **Text contrast**: Minimum 4.5:1 ratio for normal text
- **Interactive elements**: Minimum 3:1 ratio for focus states
- **Color independence**: Information isn't conveyed by color alone
- **Focus indicators**: Clear focus states for keyboard navigation

## Migration from Old Themes

```javascript
// Old theme usage
theme.colors.primary      // Still works
theme.colors.background   // Still works
theme.colors.text         // Still works

// New theme features
theme.intents.primary.main        // New intent system
theme.colors.text.primary         // Enhanced text colors
theme.colors.surface.primary      // Enhanced surface colors
theme.palettes.blue[500]          // Direct palette access
```

The new themes are fully backward compatible while providing enhanced functionality. 