# Example App Implementations

This document shows how different types of applications can use the navigation system with both SSR and React Navigation support.

## 1. Admin Dashboard App

### Configuration
```typescript
// navigation.config.ts
import { NavigationConfig } from '@idealyst/navigation';

export const adminNavigationConfig: NavigationConfig = {
  type: 'sidebar',
  sidebar: {
    items: [
      {
        name: 'dashboard',
        title: 'Dashboard',
        path: '/dashboard',
        icon: 'dashboard',
        component: DashboardScreen
      },
      {
        name: 'users',
        title: 'User Management',
        path: '/users',
        icon: 'users',
        children: [
          {
            name: 'all-users',
            title: 'All Users',
            path: '/users',
            component: UsersListScreen
          },
          {
            name: 'create-user',
            title: 'Create User',
            path: '/users/create',
            component: CreateUserScreen
          }
        ]
      },
      {
        name: 'settings',
        title: 'Settings',
        path: '/settings',
        icon: 'settings',
        component: SettingsScreen
      }
    ],
    header: {
      title: 'Admin Panel',
      logo: AdminLogo
    },
    collapsible: true,
    width: 280,
    collapsedWidth: 64,
    breakpoint: 768
  },
  layouts: {
    default: 'AdminSidebarLayout',
    auth: 'AuthLayout'
  }
};
```

### Web Implementation (SSR-Compatible)
```typescript
// App.web.tsx
import { BrowserRouter } from 'react-router-dom';
import { NavigationProvider } from '@idealyst/navigation';
import { adminNavigationConfig } from './navigation.config';

const AdminApp = () => (
  <BrowserRouter>
    <NavigationProvider config={adminNavigationConfig}>
      <div className="admin-app">
        {/* Routes are automatically generated from config */}
      </div>
    </NavigationProvider>
  </BrowserRouter>
);

export default AdminApp;
```

### Native Implementation
```typescript
// App.native.tsx
import { NavigationContainer } from '@react-navigation/native';
import { NavigationProvider } from '@idealyst/navigation';
import { adminNavigationConfig } from './navigation.config';

const AdminApp = () => (
  <NavigationContainer>
    <NavigationProvider config={adminNavigationConfig}>
      {/* Navigation automatically configured */}
    </NavigationProvider>
  </NavigationContainer>
);

export default AdminApp;
```

### Server-Side Rendering
```typescript
// server.tsx
import { StaticRouter } from 'react-router-dom/server';
import { renderToString } from 'react-dom/server';
import { NavigationProvider } from '@idealyst/navigation';
import { adminNavigationConfig } from './navigation.config';

export const renderAdminApp = (url: string) => {
  return renderToString(
    <StaticRouter location={url}>
      <NavigationProvider config={adminNavigationConfig}>
        <AdminApp />
      </NavigationProvider>
    </StaticRouter>
  );
};
```

## 2. E-commerce App

### Configuration
```typescript
// navigation.config.ts
export const ecommerceNavigationConfig: NavigationConfig = {
  type: 'hybrid',
  header: {
    navigation: [
      { name: 'home', title: 'Home', path: '/', component: HomeScreen },
      { name: 'products', title: 'Products', path: '/products', component: ProductsScreen },
      { name: 'cart', title: 'Cart', path: '/cart', component: CartScreen, badge: 'cartCount' }
    ]
  },
  sidebar: {
    items: [
      {
        name: 'categories',
        title: 'Categories',
        children: [
          { name: 'electronics', title: 'Electronics', path: '/products/electronics' },
          { name: 'clothing', title: 'Clothing', path: '/products/clothing' },
          { name: 'books', title: 'Books', path: '/products/books' }
        ]
      },
      {
        name: 'filters',
        title: 'Filters',
        component: FilterSidebar
      }
    ],
    collapsible: true,
    position: 'left',
    width: 300
  },
  layouts: {
    default: 'EcommerceLayout',
    product: 'ProductLayout',
    checkout: 'CheckoutLayout'
  }
};
```

### Layout Components
```typescript
// layouts/EcommerceLayout.tsx
const EcommerceLayout = ({ children }: { children: React.ReactNode }) => {
  const { isSidebarOpen, toggleSidebar } = useSidebarNavigation();
  const { cartCount } = useCart();
  
  return (
    <div className="ecommerce-layout">
      <header className="header">
        <button onClick={toggleSidebar}>☰</button>
        <Logo />
        <nav className="main-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart">
            Cart ({cartCount})
          </NavLink>
        </nav>
      </header>
      
      <div className="content-area">
        <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <CategoryFilter />
          <PriceFilter />
        </aside>
        
        <main className="main-content">
          {children}
        </main>
      </div>
      
      <footer className="footer">
        <FooterContent />
      </footer>
    </div>
  );
};
```

## 3. Content/Blog Site

### Configuration
```typescript
// navigation.config.ts
export const contentNavigationConfig: NavigationConfig = {
  type: 'stack',
  header: {
    navigation: [
      { name: 'home', title: 'Home', path: '/', component: HomeScreen },
      { name: 'blog', title: 'Blog', path: '/blog', component: BlogScreen },
      { name: 'about', title: 'About', path: '/about', component: AboutScreen },
      { name: 'contact', title: 'Contact', path: '/contact', component: ContactScreen }
    ]
  },
  layouts: {
    default: 'ContentLayout',
    article: 'ArticleLayout',
    landing: 'LandingLayout'
  }
};
```

### SEO-Optimized SSR
```typescript
// server.tsx
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { NavigationProvider } from '@idealyst/navigation';
import { contentNavigationConfig } from './navigation.config';

export const renderContentApp = (url: string, data: any) => {
  const html = renderToString(
    <StaticRouter location={url}>
      <NavigationProvider config={contentNavigationConfig}>
        <ContentApp initialData={data} />
      </NavigationProvider>
    </StaticRouter>
  );
  
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${data.title}</title>
        <meta name="description" content="${data.description}" />
        <meta property="og:title" content="${data.title}" />
        <meta property="og:description" content="${data.description}" />
      </head>
      <body>
        <div id="root">${html}</div>
        <script>window.__INITIAL_DATA__ = ${JSON.stringify(data)}</script>
      </body>
    </html>
  `;
};
```

## 4. Multi-Tenant SaaS App

### Configuration
```typescript
// navigation.config.ts
export const saasNavigationConfig: NavigationConfig = {
  type: 'sidebar',
  sidebar: {
    items: [
      {
        name: 'dashboard',
        title: 'Dashboard',
        path: '/dashboard',
        icon: 'dashboard',
        component: DashboardScreen
      },
      {
        name: 'projects',
        title: 'Projects',
        path: '/projects',
        icon: 'projects',
        children: [
          { name: 'all-projects', title: 'All Projects', path: '/projects' },
          { name: 'create-project', title: 'New Project', path: '/projects/create' }
        ]
      },
      {
        name: 'team',
        title: 'Team',
        path: '/team',
        icon: 'team',
        component: TeamScreen
      },
      {
        name: 'billing',
        title: 'Billing',
        path: '/billing',
        icon: 'billing',
        component: BillingScreen,
        badge: 'invoiceCount'
      }
    ],
    header: {
      component: TenantHeader // Custom header with tenant info
    },
    footer: {
      component: TenantFooter
    }
  },
  layouts: {
    default: 'SaasSidebarLayout',
    onboarding: 'OnboardingLayout',
    billing: 'BillingLayout'
  }
};
```

### Tenant-Aware Navigation
```typescript
// hooks/useTenantNavigation.ts
export const useTenantNavigation = () => {
  const { tenant } = useTenant();
  const navigation = useNavigation();
  
  const navigateToTenantRoute = (route: string, params?: any) => {
    const tenantRoute = `/${tenant.slug}${route}`;
    navigation.navigate(tenantRoute, params);
  };
  
  return {
    ...navigation,
    navigateToTenantRoute
  };
};
```

## 5. Mobile-First App with Web Companion

### Configuration
```typescript
// navigation.config.ts
export const mobileFirstNavigationConfig: NavigationConfig = {
  type: 'tab',
  tabs: {
    items: [
      {
        name: 'home',
        title: 'Home',
        path: '/',
        icon: 'home',
        component: HomeScreen
      },
      {
        name: 'explore',
        title: 'Explore',
        path: '/explore',
        icon: 'search',
        component: ExploreScreen
      },
      {
        name: 'notifications',
        title: 'Notifications',
        path: '/notifications',
        icon: 'bell',
        component: NotificationsScreen,
        badge: 'notificationCount'
      },
      {
        name: 'profile',
        title: 'Profile',
        path: '/profile',
        icon: 'user',
        component: ProfileScreen
      }
    ],
    position: 'bottom' // Native tabs
  },
  layouts: {
    default: 'MobileLayout',
    web: 'WebCompanionLayout' // Different layout for web
  }
};
```

### Platform-Specific Layouts
```typescript
// layouts/MobileLayout.tsx (Mobile)
const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <View style={{ flex: 1 }}>
        {children}
      </View>
    </SafeAreaView>
  );
};

// layouts/WebCompanionLayout.tsx (Web)
const WebCompanionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="web-companion-layout">
      <div className="mobile-mockup">
        <div className="mobile-screen">
          {children}
        </div>
      </div>
      <div className="web-features">
        <WebOnlyFeatures />
      </div>
    </div>
  );
};
```

## Benefits Demonstrated

### 1. Single Configuration
- Same navigation config works across all platforms
- No platform-specific navigation code in app logic
- Consistent navigation behavior

### 2. Layout Flexibility
- Different layouts for different app sections
- Platform-specific layout optimizations
- Responsive design built-in

### 3. SSR Compatibility
- Full server-side rendering for SEO
- Fast initial page loads
- Progressive enhancement

### 4. Native Mobile Experience
- Platform-native navigation patterns
- Gesture support and animations
- Optimized performance

### 5. Developer Experience
- Unified API across platforms
- Type-safe navigation
- Easy to test and maintain

This approach enables you to build any type of app with the same navigation system, from simple content sites to complex admin dashboards, all while maintaining SSR compatibility and native mobile experiences. 