import * as React from 'react';

// Core navigation types for cross-platform navigation
export type ScreenComponent<T = any> = React.ComponentType<T>;

export interface RouteConfig {
  name: string;
  component: ScreenComponent;
  options?: ScreenOptions;
  // Web-specific
  path?: string;
  children?: RouteConfig[];
  // Native-specific
  initialParams?: Record<string, any>;
}

export interface ScreenOptions {
  title?: string;
  headerShown?: boolean;
  // Web-specific
  exact?: boolean;
  // Native-specific
  headerStyle?: any;
  headerTitleStyle?: any;
  headerBackTitle?: string;
  gestureEnabled?: boolean;
  animationEnabled?: boolean;
}

// Sidebar/Drawer specific types
export interface SidebarItem {
  name: string;
  title: string;
  icon?: React.ComponentType<any> | string;
  component?: ScreenComponent;
  path?: string; // Web route
  children?: SidebarItem[];
  // Visual options
  badge?: string | number;
  disabled?: boolean;
  divider?: boolean; // Add divider after this item
}

export interface SidebarConfig {
  items: SidebarItem[];
  // Responsive behavior
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  breakpoint?: number; // Screen width breakpoint for auto-collapse
  // Web-specific
  width?: number;
  collapsedWidth?: number;
  position?: 'left' | 'right';
  // Mobile-specific
  swipeEnabled?: boolean;
  overlay?: boolean;
  // Styling
  backgroundColor?: string;
  borderColor?: string;
  header?: {
    title?: string;
    logo?: React.ComponentType<any>;
    component?: ScreenComponent;
  };
  footer?: {
    component?: ScreenComponent;
  };
}

export interface SidebarNavigationHook extends NavigationHook {
  // Sidebar-specific methods
  toggleSidebar: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
  isSidebarOpen: boolean;
  isSidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
}

export interface NavigationState {
  routes: RouteConfig[];
  index: number;
  key: string;
}

export interface NavigationParams {
  [key: string]: any;
}

export interface NavigationOptions {
  // Stack navigation
  replace?: boolean;
  // Tab navigation
  screen?: string;
  // Drawer navigation
  merge?: boolean;
}

export interface NavigationHook {
  // Core navigation methods
  navigate: (name: string, params?: NavigationParams, options?: NavigationOptions) => void;
  goBack: () => void;
  canGoBack: () => boolean;
  reset: (state: Partial<NavigationState>) => void;
  
  // Route information
  getCurrentRoute: () => RouteConfig | null;
  getParams: <T = NavigationParams>() => T;
  
  // Web-specific methods
  push?: (path: string, state?: any) => void;
  replace?: (path: string, state?: any) => void;
  
  // Native-specific methods
  popToTop?: () => void;
  setOptions?: (options: ScreenOptions) => void;
}

export interface NavigatorConfig {
  initialRouteName?: string;
  screenOptions?: ScreenOptions;
  // Navigator types
  type?: 'stack' | 'tab' | 'drawer' | 'sidebar';
  // Web-specific
  basename?: string;
  // Native-specific
  headerMode?: 'screen' | 'float' | 'none';
  // Sidebar-specific
  sidebar?: SidebarConfig;
}

export interface NavigationProviderProps {
  config: NavigatorConfig;
  routes: RouteConfig[];
  children?: React.ReactNode;
  // Web-specific
  router?: 'browser' | 'hash' | 'memory';
  // Native-specific
  theme?: any;
}

// Platform-specific types
export interface WebNavigationState {
  pathname: string;
  search: string;
  hash: string;
  state?: any;
}

export interface NativeNavigationState {
  key: string;
  name: string;
  params?: NavigationParams;
  path?: string;
}

// Event types
export interface NavigationEventMap {
  focus: { data: undefined };
  blur: { data: undefined };
  beforeRemove: { data: { action: any } };
  tabPress: { data: { target?: string } };
  sidebarToggle: { data: { isOpen: boolean } };
  sidebarCollapse: { data: { isCollapsed: boolean } };
}

export type NavigationEventName = keyof NavigationEventMap;

export interface NavigationListener<T extends NavigationEventName> {
  (event: NavigationEventMap[T]): void;
}

export interface NavigationContext {
  navigation: NavigationHook;
  route: RouteConfig;
  // Platform detection
  platform: 'web' | 'native';
} 