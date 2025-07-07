# SSR + React Navigation Strategy

## The Challenge

The fundamental challenge is that **React Navigation** (mobile) and **SSR** (web) have conflicting requirements:

- **React Navigation**: Client-side only, doesn't work with SSR
- **SSR**: Needs to render navigation state server-side
- **Hydration**: Server and client rendered HTML must match

## Solution Architecture

### 1. Platform-Specific Navigation Backends

#### Web Implementation (SSR-Compatible)
- **React Router v6**: Full SSR support with `StaticRouter`
- **Server-side rendering**: Layout rendered based on URL
- **Client hydration**: Seamless takeover after hydration
- **Nested routes**: Hierarchical routing with layouts

#### Native Implementation (Client-Side)
- **React Navigation v6**: Full native navigation stack
- **No SSR concerns**: Pure client-side navigation
- **Native gestures**: Platform-specific navigation patterns

### 2. Unified API Layer

```typescript
// Same configuration works for both platforms
const navigationConfig = {
  type: 'sidebar',
  sidebar: {
    items: [
      { name: 'Dashboard', path: '/dashboard', component: DashboardScreen },
      { name: 'Settings', path: '/settings', component: SettingsScreen }
    ]
  },
  layouts: {
    default: 'SidebarLayout',
    public: 'PublicLayout',
    admin: 'AdminLayout'
  }
};
```

### 3. SSR Implementation Strategy

#### Server-Side Rendering (Web)
```typescript
// server.tsx
import { StaticRouter } from 'react-router-dom/server';
import { NavigationProvider } from '@idealyst/navigation';

const renderApp = (url: string) => {
  return renderToString(
    <StaticRouter location={url}>
      <NavigationProvider config={navigationConfig}>
        <App />
      </NavigationProvider>
    </StaticRouter>
  );
};
```

#### Client-Side Hydration (Web)
```typescript
// client.tsx
import { BrowserRouter } from 'react-router-dom';
import { NavigationProvider } from '@idealyst/navigation';

const App = () => (
  <BrowserRouter>
    <NavigationProvider config={navigationConfig}>
      <AppContent />
    </NavigationProvider>
  </BrowserRouter>
);

hydrateRoot(document.getElementById('root'), <App />);
```

#### Native Implementation (No SSR)
```typescript
// App.native.tsx
import { NavigationContainer } from '@react-navigation/native';
import { NavigationProvider } from '@idealyst/navigation';

const App = () => (
  <NavigationContainer>
    <NavigationProvider config={navigationConfig}>
      <AppContent />
    </NavigationProvider>
  </NavigationContainer>
);
```

## Common App Layout Patterns

### 1. Admin Dashboard Layout
```typescript
const adminConfig = {
  type: 'sidebar',
  sidebar: {
    items: [
      { name: 'Dashboard', path: '/', icon: 'dashboard' },
      { name: 'Users', path: '/users', icon: 'users' },
      { name: 'Settings', path: '/settings', icon: 'settings' }
    ],
    collapsible: true,
    width: 280,
    breakpoint: 768
  },
  layouts: {
    default: 'AdminSidebarLayout'
  }
};
```

### 2. Content Site Layout
```typescript
const contentConfig = {
  type: 'stack',
  header: {
    navigation: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' }
    ]
  },
  layouts: {
    default: 'ContentLayout',
    article: 'ArticleLayout'
  }
};
```

### 3. E-commerce Layout
```typescript
const ecommerceConfig = {
  type: 'hybrid',
  header: {
    navigation: [
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/products' },
      { name: 'Cart', path: '/cart', badge: 'cartCount' }
    ]
  },
  sidebar: {
    items: [
      { name: 'Categories', children: categoryItems },
      { name: 'Filters', component: FilterComponent }
    ],
    collapsible: true,
    position: 'left'
  }
};
```

## Layout System

### 1. Layout Components
```typescript
// layouts/SidebarLayout.tsx
const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  const { isSidebarOpen, isMobile } = useSidebarNavigation();
  
  return (
    <div className="app-layout">
      <Sidebar />
      <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Header />
        <div className="content">
          {children}
        </div>
      </main>
    </div>
  );
};
```

### 2. Layout Selection
```typescript
// Automatic layout selection based on route
const layoutMap = {
  '/admin/*': 'AdminLayout',
  '/dashboard/*': 'SidebarLayout',
  '/auth/*': 'AuthLayout',
  '*': 'DefaultLayout'
};
```

### 3. SSR Layout Rendering
```typescript
// Server determines layout based on URL
const getLayoutForRoute = (pathname: string) => {
  if (pathname.startsWith('/admin')) return 'AdminLayout';
  if (pathname.startsWith('/dashboard')) return 'SidebarLayout';
  return 'DefaultLayout';
};
```

## Platform-Specific Optimizations

### Web (SSR-Compatible)
```typescript
// NavigationProvider.web.tsx
const WebNavigationProvider = ({ config, children }) => {
  const [isSSR, setIsSSR] = useState(true);
  
  useEffect(() => {
    setIsSSR(false); // Client-side hydration complete
  }, []);
  
  return (
    <Routes>
      {config.routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <LayoutWrapper layout={route.layout}>
              <route.component />
            </LayoutWrapper>
          }
        />
      ))}
    </Routes>
  );
};
```

### Native (Client-Side)
```typescript
// NavigationProvider.native.tsx
const NativeNavigationProvider = ({ config, children }) => {
  const Stack = createStackNavigator();
  
  return (
    <Stack.Navigator>
      {config.routes.map(route => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Stack.Navigator>
  );
};
```

## Benefits of This Approach

### 1. SSR Compatibility
- **Server-side rendering**: Full layout rendered on server
- **SEO-friendly**: Search engines see complete page structure
- **Fast first paint**: Immediate layout render without JS

### 2. Native Experience
- **Platform-native navigation**: iOS/Android navigation patterns
- **Gesture support**: Native swipe and touch interactions
- **Performance**: Optimized for mobile devices

### 3. Unified Development
- **Single configuration**: Same route config for all platforms
- **Consistent API**: Same hooks and navigation methods
- **Code reuse**: Share navigation logic across platforms

### 4. Layout Flexibility
- **Multiple layouts**: Different layouts for different app sections
- **Responsive design**: Automatic adaptation to screen size
- **Customizable**: Easy to extend with new layout patterns

## Implementation Phases

### Phase 1: Core Platform Abstraction
1. Platform detection and router selection
2. Basic NavigationProvider implementations
3. Route configuration system

### Phase 2: Layout System
1. Layout component architecture
2. Layout selection logic
3. SSR layout rendering

### Phase 3: Sidebar Navigator
1. Responsive sidebar implementation
2. Mobile hamburger menu
3. Desktop persistent sidebar

### Phase 4: Advanced Features
1. Nested navigation
2. Authentication integration
3. Deep linking support

This approach provides the best of both worlds: SSR compatibility for web with SEO benefits, and native navigation patterns for mobile, all while maintaining a unified API that works across platforms. 