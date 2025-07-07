# SidebarNavigator Implementation Guide

## Overview

The SidebarNavigator provides a responsive navigation solution that adapts to different screen sizes and platforms:

- **Web Desktop**: Persistent sidebar with collapse/expand
- **Web Mobile**: Hamburger menu with overlay
- **Native Mobile**: Drawer navigation with native gestures

## Key Features

### 1. Responsive Design
- **Automatic breakpoint detection**: Switches between desktop and mobile modes
- **Configurable breakpoints**: Custom screen width thresholds
- **Smooth transitions**: Animated sidebar state changes

### 2. Platform Adaptations
- **Web**: Uses CSS transforms and media queries
- **Native**: Leverages React Navigation's DrawerNavigator
- **Unified API**: Same configuration works across platforms

### 3. Advanced Navigation
- **Nested menu items**: Hierarchical navigation structure
- **Active state tracking**: Highlights current route
- **Badge support**: Visual indicators for menu items
- **Icon integration**: Consistent iconography

## Implementation Architecture

### Core Components

#### 1. SidebarNavigator.web.tsx
```typescript
// Web implementation using CSS and React Router
interface WebSidebarProps {
  config: SidebarConfig;
  children: React.ReactNode;
}

const WebSidebar: React.FC<WebSidebarProps> = ({ config, children }) => {
  // Responsive breakpoint handling
  // CSS-based sidebar with overlay support
  // React Router integration for web routing
};
```

#### 2. SidebarNavigator.native.tsx
```typescript
// Native implementation using React Navigation
interface NativeSidebarProps {
  config: SidebarConfig;
  children: React.ReactNode;
}

const NativeSidebar: React.FC<NativeSidebarProps> = ({ config, children }) => {
  // React Navigation DrawerNavigator
  // Native gesture handling
  // Screen navigation integration
};
```

#### 3. SidebarItem.tsx
```typescript
// Shared sidebar item component
interface SidebarItemProps {
  item: SidebarItem;
  level: number;
  isActive: boolean;
  onPress: (item: SidebarItem) => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, level, isActive, onPress }) => {
  // Recursive rendering for nested items
  // Platform-specific styling
  // Badge and icon rendering
};
```

## Configuration Examples

### Basic Sidebar
```typescript
const basicSidebarConfig: SidebarConfig = {
  items: [
    {
      name: 'home',
      title: 'Home',
      icon: 'home',
      path: '/',
      component: HomeScreen
    },
    {
      name: 'profile',
      title: 'Profile',
      icon: 'user',
      path: '/profile',
      component: ProfileScreen
    }
  ],
  collapsible: true,
  width: 280,
  collapsedWidth: 64
};
```

### Advanced Sidebar with Nesting
```typescript
const advancedSidebarConfig: SidebarConfig = {
  items: [
    {
      name: 'dashboard',
      title: 'Dashboard',
      icon: 'dashboard',
      path: '/dashboard',
      component: DashboardScreen
    },
    {
      name: 'settings',
      title: 'Settings',
      icon: 'settings',
      path: '/settings',
      children: [
        {
          name: 'profile',
          title: 'Profile',
          path: '/settings/profile',
          component: ProfileScreen
        },
        {
          name: 'security',
          title: 'Security',
          path: '/settings/security',
          component: SecurityScreen,
          badge: 'new'
        }
      ]
    },
    {
      name: 'divider1',
      title: '',
      divider: true
    },
    {
      name: 'help',
      title: 'Help',
      icon: 'help',
      path: '/help',
      component: HelpScreen
    }
  ],
  header: {
    title: 'My App',
    logo: LogoComponent
  },
  footer: {
    component: FooterComponent
  },
  breakpoint: 768,
  collapsible: true,
  defaultCollapsed: false,
  swipeEnabled: true
};
```

## Hook Integration

### useSidebarNavigation Hook
```typescript
const MyComponent = () => {
  const {
    // Standard navigation
    navigate,
    goBack,
    
    // Sidebar-specific
    toggleSidebar,
    openSidebar,
    closeSidebar,
    isSidebarOpen,
    isSidebarCollapsed,
    setSidebarCollapsed,
    
    // Platform info
    isMobile,
    breakpoint
  } = useSidebarNavigation();
  
  return (
    <View>
      {isMobile && (
        <Button onPress={toggleSidebar}>
          {isSidebarOpen ? 'Close' : 'Open'} Menu
        </Button>
      )}
      
      {!isMobile && (
        <Button onPress={() => setSidebarCollapsed(!isSidebarCollapsed)}>
          {isSidebarCollapsed ? 'Expand' : 'Collapse'} Sidebar
        </Button>
      )}
    </View>
  );
};
```

## State Management

### SidebarContext
```typescript
interface SidebarContextType {
  isOpen: boolean;
  isCollapsed: boolean;
  isMobile: boolean;
  activeItem: string | null;
  config: SidebarConfig;
  
  // Actions
  toggle: () => void;
  open: () => void;
  close: () => void;
  setCollapsed: (collapsed: boolean) => void;
  setActiveItem: (item: string) => void;
}
```

## Platform-Specific Features

### Web Implementation
- **CSS Grid/Flexbox**: Responsive layout system
- **Media queries**: Breakpoint-based responsive behavior
- **CSS animations**: Smooth sidebar transitions
- **Overlay support**: Mobile-style overlay on small screens
- **Keyboard navigation**: Accessibility support

### Native Implementation
- **React Navigation**: DrawerNavigator integration
- **Native gestures**: Swipe to open/close
- **Platform styling**: iOS/Android specific designs
- **Safe area handling**: Proper insets and padding
- **Hardware back button**: Android back button support

## Benefits

1. **Unified API**: Same configuration works across platforms
2. **Responsive Design**: Automatically adapts to screen size
3. **Native Feel**: Platform-specific implementations
4. **Accessibility**: Built-in accessibility features
5. **Customizable**: Extensive styling and configuration options
6. **Performance**: Optimized for each platform
7. **Developer Experience**: Simple integration with existing navigation

## Integration with Existing Navigation

The SidebarNavigator can be combined with other navigators:

```typescript
const App = () => (
  <NavigationProvider config={{ type: 'sidebar', sidebar: sidebarConfig }}>
    <SidebarNavigator>
      {/* Main content area can contain other navigators */}
      <StackNavigator>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Details" component={DetailsScreen} />
      </StackNavigator>
    </SidebarNavigator>
  </NavigationProvider>
);
```

This creates a powerful, flexible navigation system that provides a native app-like experience across all platforms while maintaining a single, consistent API. 