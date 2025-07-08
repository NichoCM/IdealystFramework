# @idealyst/navigation

A cross-platform navigation library that provides a unified API for both React Native (using React Navigation) and Web (using React Router).

## Installation

```bash
yarn add @idealyst/navigation

# For React Native
yarn add @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs @react-navigation/drawer

# For Web
yarn add react-router-dom
```

## Usage

### Basic Setup

The library provides a component-based routing configuration that works across platforms:

```tsx
import React from 'react';
import { buildRouter, NavigatorProvider } from '@idealyst/navigation';
import { HomeScreen, ProfileScreen, SettingsScreen } from './screens';

const routeConfig = {
  path: '/',
  component: HomeScreen,
  routes: [
    {
      path: '/profile/:userId',
      component: ProfileScreen,
    },
    {
      path: '/settings',
      component: SettingsScreen,
    }
  ]
};

const AppRouter = buildRouter(routeConfig);

export default function App() {
  return (
    <NavigatorProvider>
      <AppRouter />
    </NavigatorProvider>
  );
}
```

### Navigation

Use the `useNavigator` hook to navigate between screens:

```tsx
import React from 'react';
import { useNavigator } from '@idealyst/navigation';

export function HomeScreen() {
  const { navigate } = useNavigator();

  const goToProfile = () => {
    navigate({
      path: '/profile/:userId',
      vars: { userId: '123' }
    });
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={goToProfile}>Go to Profile</button>
    </div>
  );
}
```

### Layout Types

The library supports different layout types for organizing your navigation:

#### Stack Navigation
```tsx
const routeConfig = {
  path: '/',
  component: HomeScreen,
  layout: {
    type: 'stack',
    component: CustomStackLayout
  },
  routes: [
    { path: '/detail', component: DetailScreen }
  ]
};
```

#### Tab Navigation
```tsx
const routeConfig = {
  path: '/',
  component: HomeScreen,
  layout: {
    type: 'tab',
    component: CustomTabLayout
  },
  routes: [
    { path: '/profile', component: ProfileScreen },
    { path: '/settings', component: SettingsScreen }
  ]
};
```

#### Drawer Navigation
```tsx
const routeConfig = {
  path: '/',
  component: HomeScreen,
  layout: {
    type: 'drawer',
    component: CustomDrawerLayout
  },
  routes: [
    { path: '/profile', component: ProfileScreen },
    { path: '/settings', component: SettingsScreen }
  ]
};
```

### Platform-Specific Imports

The library automatically handles platform-specific routing:

```tsx
// This will use React Navigation on React Native
// and React Router on Web
import { buildRouter } from '@idealyst/navigation';
```

For web-specific features, you can import directly:

```tsx
import { buildRouter } from '@idealyst/navigation/src/index.web';
```

## React Router Integration

On web platforms, this library uses React Router's declarative mode to provide SSR-compatible routing while maintaining the same API as React Native.

### Features

- ✅ Component-based routing configuration
- ✅ Unified navigation API across platforms
- ✅ Support for nested routes
- ✅ Layout composition
- ✅ URL parameters and navigation variables
- ✅ SSR compatibility (web)
- ✅ Type safety

### SSR Support

The web implementation uses React Router's declarative mode, which supports SSR:

```tsx
// Server-side rendering
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

const markup = renderToString(
  <StaticRouter location={req.url} context={{}}>
    <App />
  </StaticRouter>
);
```

## API Reference

### `buildRouter(routeConfig, path?)`

Creates a router component from a route configuration.

**Parameters:**
- `routeConfig: RouteParam` - The route configuration object
- `path?: string` - Optional base path

**Returns:** React component

### `useNavigator()`

Hook that provides navigation functionality.

**Returns:** Object with:
- `navigate: (params: NavigateParams) => void` - Navigate to a route

### Types

```tsx
type RouteParam = {
  path?: string;
  routes?: RouteParam[];
  component: React.ComponentType;
  layout?: LayoutParam;
}

type LayoutParam = {
  type: 'stack' | 'tab' | 'drawer' | 'modal';
  component?: React.ComponentType<{ children?: React.ReactNode }>;
}

type NavigateParams = {
  path: string;
  vars: Record<string, string>;
}
```

## Examples

See the [examples](./examples) directory for complete implementation examples for both React Native and Web platforms.

## Contributing

Contributions are welcome! Please read our contributing guide for details.

## License

MIT 