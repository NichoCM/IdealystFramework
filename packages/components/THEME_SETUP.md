# Shared Theme Setup for Unistyles 3.0

This guide explains how to set up the shared theme system for cross-platform components using Unistyles 3.0.

## Overview

The shared theme provides:
- ✅ **Unified Design Tokens**: Colors, spacing, typography, border radius
- ✅ **Dark/Light Mode Support**: Automatic theme switching
- ✅ **Type Safety**: Full TypeScript support
- ✅ **Cross-Platform**: Works on both web and native

## Setup Instructions

### 1. Install Dependencies

Make sure you have the required dependencies:

```bash
yarn add react-native-unistyles@next
yarn add react-native-nitro-modules react-native-edge-to-edge
```

### 2. Configure Babel

Add the Unistyles Babel plugin to your `babel.config.js`:

```javascript
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['react-native-unistyles/plugin', {
      root: 'src' // or your app's source directory
    }]
  ]
};
```

### 3. Configure the Theme

In your app's entry point (before importing any components), configure the theme:

```javascript
// App.tsx or index.js
import { configureUnistyles } from '@idealyst/components';

// Configure the theme before importing any components
configureUnistyles();

// Now you can import your components
import { Button, Text, View } from '@idealyst/components';
```

### 4. TypeScript Setup

If you're using TypeScript, the theme types are automatically configured. You'll get full autocompletion for theme properties.

## Theme Structure

The shared theme includes:

### Colors
- `primary`, `secondary`, `background`, `surface`
- `text`, `textSecondary`, `border`
- `success`, `warning`, `error`

### Spacing
- `xs`: 4px, `sm`: 8px, `md`: 16px, `lg`: 24px, `xl`: 32px, `xxl`: 40px

### Border Radius
- `xs`: 4px, `sm`: 8px, `md`: 12px, `lg`: 16px, `xl`: 20px

### Typography
- Font sizes: `xs`, `sm`, `md`, `lg`, `xl`, `xxl`
- Font weights: `light`, `regular`, `medium`, `semibold`, `bold`

## Usage in Components

```javascript
import { StyleSheet } from 'react-native-unistyles';

const styles = StyleSheet.create((theme) => ({
  container: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
  },
  text: {
    color: theme.colors.text,
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.medium,
  }
}));
```

## Dark Mode Support

The theme automatically supports dark mode. Components will automatically use the appropriate theme based on the system preference.

## Customization

To customize the theme, modify the theme configuration in `packages/components/src/theme/index.ts`.

## Troubleshooting

### Theme Properties Not Found
If you're getting TypeScript errors about theme properties not existing, make sure:
1. You've imported and called `configureUnistyles()` before importing components
2. The Babel plugin is properly configured
3. You're using the correct theme property names

### Components Not Updating
If components aren't updating when the theme changes, ensure:
1. The theme is configured before any components are imported
2. The Babel plugin is processing your source files
3. You're using the latest version of Unistyles 3.0

## Example App Structure

```
src/
├── App.tsx                 # Configure theme here
├── components/
│   ├── MyComponent.tsx    # Use theme in components
│   └── ...
└── ...
```

```javascript
// App.tsx
import { configureUnistyles } from '@idealyst/components';

// Configure theme first
configureUnistyles();

// Then import components
import { Button, Text, View } from '@idealyst/components';
``` 