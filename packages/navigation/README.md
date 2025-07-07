# @idealyst/navigation

A cross-platform navigation library for React and React Native applications.

## Implementation Strategy

### Core Architecture

The navigation system follows a **unified API pattern** with platform-specific implementations:

1. **Cross-platform interface**: Common navigation methods and types
2. **Platform-specific adapters**: Web (React Router) and Native (React Navigation)
3. **Smart route configuration**: Automatically maps routes between platforms
4. **SSR compatibility**: Built-in support for server-side rendering on web

### Key Components

#### 1. NavigationProvider
- **Purpose**: Root navigation context provider
- **Web**: Wraps React Router's BrowserRouter/HashRouter
- **Native**: Wraps React Navigation's NavigationContainer
- **Features**: 
  - Auto-detects platform
  - Handles route configuration mapping
  - Provides unified navigation context

#### 2. Navigator Components
- **Stack Navigator**: Linear navigation stack
- **Tab Navigator**: Bottom tabs (mobile) / Top tabs (web)
- **Drawer Navigator**: Side drawer navigation
- **Sidebar Navigator**: Responsive sidebar (web) / hamburger menu (mobile)

#### 3. Navigation Hooks
- **useNavigation()**: Core navigation methods
- **useRoute()**: Current route information
- **useParams()**: URL/route parameters
- **useFocusEffect()**: Screen focus/blur events

### Platform-Specific Implementations

#### Web Implementation (React Router)
- **URL-based routing**: /path/to/screen
- **History API**: Browser back/forward
- **Nested routes**: Hierarchical route structure
- **Code splitting**: Dynamic imports for screens
- **SSR support**: Server-side route resolution

#### Native Implementation (React Navigation)
- **Stack-based**: Push/pop navigation
- **Tab-based**: Bottom tab navigation
- **Drawer-based**: Side menu navigation
- **Gesture support**: Swipe gestures
- **Deep linking**: URL scheme handling

### Route Configuration

#### Unified Route Definition
```typescript
const routes: RouteConfig[] = [
  {
    name: 'Home',
    component: HomeScreen,
    path: '/', // Web-specific
    options: { title: 'Home' }
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    path: '/profile/:id', // Web params
    options: { title: 'Profile' }
  }
];
```

#### Automatic Platform Mapping
- **Web**: `path` becomes React Router route
- **Native**: `name` becomes React Navigation screen
- **Parameters**: URL params ↔ Navigation params

### Sidebar Navigator (Responsive Layout)

The **SidebarNavigator** is a specialized navigator that provides a responsive navigation solution:

#### Behavior by Platform
- **Web (Desktop)**: Persistent sidebar with collapse/expand functionality
- **Web (Mobile viewport)**: Automatically switches to hamburger menu
- **Native (Mobile)**: Hamburger menu with slide-out drawer

#### Configuration
```typescript
const sidebarConfig: SidebarConfig = {
  items: [
    {
      name: 'Dashboard',
      title: 'Dashboard',
      icon: DashboardIcon,
      path: '/dashboard',
      component: DashboardScreen
    },
    {
      name: 'Settings',
      title: 'Settings',
      icon: SettingsIcon,
      path: '/settings',
      children: [
        {
          name: 'Profile',
          title: 'Profile',
          path: '/settings/profile',
          component: ProfileScreen
        },
        {
          name: 'Security',
          title: 'Security',
          path: '/settings/security',
          component: SecurityScreen
        }
      ]
    }
  ],
  collapsible: true,
  defaultCollapsed: false,
  breakpoint: 768, // Switch to mobile mode below 768px
  width: 280,
  collapsedWidth: 64,
  header: {
    title: 'My App',
    logo: AppLogo
  }
};
```

#### Advanced Features
- **Responsive breakpoints**: Automatically adapts layout based on screen size
- **Nested menu items**: Support for hierarchical navigation
- **Badges and icons**: Visual indicators for menu items
- **Collapsible sidebar**: Expand/collapse functionality on web
- **Swipe gestures**: Native mobile drawer gestures
- **Custom header/footer**: Branded sidebar sections
- **Theme integration**: Follows your app's theme system

#### Usage Example
```typescript
import { NavigationProvider, SidebarNavigator } from '@idealyst/navigation';

const App = () => (
  <NavigationProvider 
    config={{ 
      type: 'sidebar',
      sidebar: sidebarConfig
    }}
    routes={routes}
  >
    <SidebarNavigator>
      <MainContent />
    </SidebarNavigator>
  </NavigationProvider>
);
```

#### Hooks Integration
```typescript
import { useSidebarNavigation } from '@idealyst/navigation';

const HeaderComponent = () => {
  const { toggleSidebar, isSidebarOpen } = useSidebarNavigation();
  
  return (
    <Button 
      onPress={toggleSidebar}
      icon={isSidebarOpen ? 'close' : 'menu'}
    />
  );
};
```

### Advanced Features

#### 1. Deep Linking
- **Web**: Standard URL handling
- **Native**: Custom URL scheme support
- **Universal**: Shared link handling logic

#### 2. Authentication Flow
- **Protected routes**: Automatic redirect/authentication
- **Auth state persistence**: Cross-platform storage
- **Login/logout flow**: Unified authentication handling

#### 3. Navigation Guards
- **Route protection**: Pre-navigation checks
- **Unsaved changes**: Prevent accidental navigation
- **Permission-based**: Role-based access control

#### 4. State Management Integration
- **Navigation state**: Persist navigation history
- **Route parameters**: State synchronization
- **Deep link restoration**: Restore app state from URLs

### Usage Examples

#### Basic Setup
```typescript
// App.tsx
import { NavigationProvider } from '@idealyst/navigation';

const App = () => (
  <NavigationProvider 
    config={{ initialRouteName: 'Home' }}
    routes={routes}
  >
    <AppContent />
  </NavigationProvider>
);
```

#### Navigation Usage
```typescript
// HomeScreen.tsx
import { useNavigation } from '@idealyst/navigation';

const HomeScreen = () => {
  const navigation = useNavigation();
  
  return (
    <Button 
      onPress={() => navigation.navigate('Profile', { id: 123 })}
      title="Go to Profile"
    />
  );
};
```

### File Structure
```
packages/navigation/src/
├── index.ts                 # Main exports
├── types.ts                 # TypeScript definitions
├── NavigationProvider/
│   ├── index.ts            # Platform-agnostic export
│   ├── NavigationProvider.web.tsx
│   ├── NavigationProvider.native.tsx
│   └── types.ts
├── navigators/
│   ├── StackNavigator/
│   │   ├── index.ts
│   │   ├── StackNavigator.web.tsx
│   │   └── StackNavigator.native.tsx
│   ├── TabNavigator/
│   ├── DrawerNavigator/
│   └── SidebarNavigator/
│       ├── index.ts
│       ├── SidebarNavigator.web.tsx
│       ├── SidebarNavigator.native.tsx
│       └── SidebarItem.tsx
├── hooks/
│   ├── useNavigation.ts
│   ├── useRoute.ts
│   ├── useParams.ts
│   ├── useFocusEffect.ts
│   └── useSidebarNavigation.ts
├── utils/
│   ├── routeMapper.ts      # Route config transformation
│   ├── platformDetector.ts # Platform detection
│   └── deepLinkHandler.ts  # Deep link parsing
└── adapters/
    ├── webAdapter.ts       # React Router integration
    └── nativeAdapter.ts    # React Navigation integration
```

### Benefits

1. **Unified API**: Same navigation code works on both platforms
2. **Type Safety**: Full TypeScript support across platforms
3. **Easy Migration**: Gradual adoption possible
4. **SEO Friendly**: Proper URL structure for web
5. **Mobile UX**: Native navigation patterns on mobile
6. **Developer Experience**: Consistent API reduces context switching
7. **Performance**: Platform-optimized implementations

### Next Steps

1. **Core Implementation**: NavigationProvider and base adapters
2. **Hook Implementation**: useNavigation, useRoute, useParams
3. **Navigator Components**: Stack, Tab, Drawer navigators
4. **Route Mapping**: Automatic platform translation
5. **Deep Linking**: Universal link handling
6. **Documentation**: Usage examples and API reference
7. **Testing**: Cross-platform test suite
8. **Example Integration**: Update example apps to use navigation

This approach provides a clean abstraction while leveraging the best of both React Router and React Navigation under the hood. 