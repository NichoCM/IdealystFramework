# Cross-Platform Component Library

A shared component library that works seamlessly across React (web) and React Native (mobile) without using react-native-web.

## Architecture

This monorepo contains:

- **`@idealyst/components`** - Shared component library with platform-specific implementations
- **`@idealyst/example-web`** - Web example using React + Vite  
- **`@idealyst/example-native`** - React Native example with Unistyles integration

## 🎨 Enhanced with Unistyles 3.0

Our React Native components now use [react-native-unistyles](https://www.unistyl.es/) for:
- **Shared Theme System**: Unified design tokens across all components
- **Dark/Light Mode**: Automatic theme switching based on system preference
- **Variants**: Built-in styling variants for different states
- **Type Safety**: Full TypeScript support for styling
- **Performance**: Build-time resolution with zero runtime overhead

### 🚀 Quick Start with Shared Theme

```javascript
// 1. Configure the theme first (in your App.tsx or index.js)
import { configureUnistyles } from '@idealyst/components';
configureUnistyles();

// 2. Import and use components
import { Button, Text, View, Input } from '@idealyst/components';

// 3. Components automatically use the shared theme!
<Button variant="primary" size="medium">
  Themed Button
</Button>
```

See [THEME_SETUP.md](./packages/components/THEME_SETUP.md) for complete setup instructions and [UNISTYLES_INTEGRATION.md](./UNISTYLES_INTEGRATION.md) for technical details.

## How It Works

The library uses a platform resolution mechanism to automatically choose the correct implementation:

- **Web**: Uses HTML elements (`<button>`, etc.)
- **React Native**: Uses native components (`TouchableOpacity`, etc.)

### Component Structure

Each component has three files:
```
Button/
├── types.ts          # Shared TypeScript interfaces
├── Button.web.tsx    # Web implementation (HTML elements)
├── Button.native.tsx # React Native implementationd
└── index.ts          # Default export (web)
└── index.native.ts   # Native export
```

## Installation

### 1. Install Dependencies

```bash
# Install all workspace dependencies
yarn install

# Install additional dependencies for React Native example
cd packages/example-native
yarn install
```

### 2. Build the Libraries

```bash
# Build the platform resolver


# Build the components library
cd packages/components
yarn build
```

## Usage

### Web Example

```bash
cd packages/example-web
yarn dev
```

The web example will run at `http://localhost:5173`

### React Native Example

```bash
cd packages/example-native

# For iOS
yarn ios

# For Android
yarn android
```

## Component Usage

Both examples use the same component API:

```tsx
import { Button } from '@idealyst/components';

function MyScreen() {
  return (
    <Button 
      variant="primary" 
      size="large" 
      onPress={() => console.log('Pressed!')}
    >
      Click Me
    </Button>
  );
}
```

## Available Components

### Button

A cross-platform button component with consistent API.

**Props:**
- `children`: Button content
- `onPress`: Click/press handler
- `variant`: `'primary' | 'secondary' | 'outline'`
- `size`: `'small' | 'medium' | 'large'`
- `disabled`: Boolean
- `style`: Platform-specific styles
- `testID`: Test identifier

**Platform Implementations:**
- **Web**: HTML `<button>` with CSS styling
- **React Native**: `TouchableOpacity` with `StyleSheet`

## Adding New Components

1. Create a new component directory in `packages/components/src/`
2. Add the component files:
   - `types.ts` - Shared interfaces
   - `ComponentName.web.tsx` - Web implementation
   - `ComponentName.native.tsx` - React Native implementation
   - `index.ts` - Default export (web)
   - `index.native.ts` - Native export
3. Export from `packages/components/src/index.ts`

Example:
```tsx
// types.ts
export interface TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

// TextInput.web.tsx
import React from 'react';
import { TextInputProps } from './types';

const TextInput: React.FC<TextInputProps> = ({ value, onChangeText, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChangeText(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default TextInput;

// TextInput.native.tsx
import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { TextInputProps } from './types';

const TextInput: React.FC<TextInputProps> = ({ value, onChangeText, placeholder }) => {
  return (
    <RNTextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
```

## Platform Resolution

The framework uses **bundler resolution** to automatically load the correct platform-specific components:

- **Web (Vite)**: Loads `Component/index.ts` → `Component.web.tsx`
- **React Native (Metro)**: Loads `Component/index.native.ts` → `Component.native.tsx`

**No runtime platform detection needed!** The bundlers handle everything automatically at build time:

```tsx
// Same import works on both platforms
import { Button } from '@idealyst/components';

// Web: Button.web.tsx is loaded
// Native: Button.native.tsx is loaded
// Developer doesn't need to know or care which one!
```

## Benefits

1. **Unified API**: Same component interface across platforms
2. **Platform-Optimized**: Native implementations for each platform
3. **Type Safety**: Full TypeScript support
4. **No React Native Web**: Avoid RNW dependencies and limitations
5. **Selective Imports**: Only bundle what you need for each platform

## Development

### Project Structure

```
packages/
├── components/           # Shared component library
│   ├── src/
│   │   ├── Button/      # Button component
│   │   │   ├── Button.web.tsx
│   │   │   ├── Button.native.tsx
│   │   │   ├── index.ts
│   │   │   ├── index.native.ts
│   │   │   └── types.ts
│   │   └── index.ts     # Main export
│   └── package.json
├── example-web/         # Web example (React + Vite)
├── example-native/      # React Native example
└── README.md
```

### Building

```bash
# Build all packages
yarn build

# Build specific package
cd packages/components
yarn build
```

### Testing

Run both examples to verify cross-platform compatibility:

```bash
# Terminal 1: Web example
cd packages/example-web
yarn dev

# Terminal 2: React Native example
cd packages/example-native
yarn start
yarn ios  # or yarn android
```

Both examples should show the same interface with platform-appropriate styling and behavior.

## License

MIT 