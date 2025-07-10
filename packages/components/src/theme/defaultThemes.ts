import { colorPalettes, intentMappings, colorMappings } from './colors';
import { resolveColor, createThemeContext } from './colorResolver';

// Default light theme color palette overrides
export const defaultLightPalettes = {
  ...colorPalettes,
  
  // Red palette
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  
  // Orange palette
  orange: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
  
  // Yellow palette
  yellow: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
  },
  
  // Green palette
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  
  // Blue palette
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  
  // Purple palette
  purple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6b21a8',
    900: '#581c87',
  },
  
  // Black palette
  black: {
    50: '#f8f9fa',
    100: '#f1f3f4',
    200: '#e8eaed',
    300: '#dadce0',
    400: '#bdc1c6',
    500: '#9aa0a6',
    600: '#80868b',
    700: '#5f6368',
    800: '#3c4043',
    900: '#202124',
  },
  
  // Gray palette
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  
  // White palette
  white: {
    50: '#ffffff',
    100: '#fefefe',
    200: '#fdfdfd',
    300: '#fcfcfc',
    400: '#fafafa',
    500: '#f8f8f8',
    600: '#f5f5f5',
    700: '#f0f0f0',
    800: '#e8e8e8',
    900: '#d4d4d4',
  },
};

// Default dark theme color palette overrides
export const defaultDarkPalettes = {
  ...defaultLightPalettes,
  
  // Adjusted gray palette for dark theme
  gray: {
    50: '#18181b',    // Very dark background
    100: '#27272a',   // Dark surface
    200: '#3f3f46',   // Medium dark
    300: '#52525b',   // Medium
    400: '#71717a',   // Medium light
    500: '#a1a1aa',   // Light gray
    600: '#d4d4d8',   // Lighter gray
    700: '#e4e4e7',   // Very light gray
    800: '#f4f4f5',   // Nearly white
    900: '#fafafa',   // White
  },
  
  // Adjusted black palette for dark theme
  black: {
    50: '#000000',    // Pure black
    100: '#0a0a0a',   // Very dark
    200: '#141414',   // Dark
    300: '#1f1f1f',   // Medium dark
    400: '#2a2a2a',   // Medium
    500: '#3c3c3c',   // Medium light
    600: '#525252',   // Light
    700: '#737373',   // Lighter
    800: '#a3a3a3',   // Very light
    900: '#d4d4d4',   // Nearly white
  },
  
  // Adjusted white palette for dark theme
  white: {
    50: '#0c0c0c',    // Very dark (inverted)
    100: '#171717',   // Dark
    200: '#262626',   // Medium dark
    300: '#404040',   // Medium
    400: '#525252',   // Medium light
    500: '#737373',   // Light
    600: '#a3a3a3',   // Lighter
    700: '#d4d4d4',   // Very light
    800: '#f5f5f5',   // Nearly white
    900: '#ffffff',   // Pure white
  },
};

// Default light theme intent mappings
export const defaultLightIntents = {
  primary: {
    palette: 'blue' as const,
    main: 500 as const,
    on: '#ffffff',
    container: 50 as const,
    onContainer: 900 as const,
    light: 100 as const,
    dark: 700 as const,
    border: 200 as const,
  },
  
  success: {
    palette: 'green' as const,
    main: 500 as const,
    on: '#ffffff',
    container: 50 as const,
    onContainer: 800 as const,
    light: 100 as const,
    dark: 700 as const,
    border: 200 as const,
  },
  
  error: {
    palette: 'red' as const,
    main: 500 as const,
    on: '#ffffff',
    container: 50 as const,
    onContainer: 800 as const,
    light: 100 as const,
    dark: 700 as const,
    border: 200 as const,
  },
  
  warning: {
    palette: 'orange' as const,
    main: 500 as const,
    on: '#ffffff',
    container: 50 as const,
    onContainer: 800 as const,
    light: 100 as const,
    dark: 700 as const,
    border: 200 as const,
  },
  
  neutral: {
    palette: 'gray' as const,
    main: 500 as const,
    on: '#ffffff',
    container: 50 as const,
    onContainer: 800 as const,
    light: 100 as const,
    dark: 700 as const,
    border: 200 as const,
  },
  
  info: {
    palette: 'blue' as const,
    main: 500 as const,
    on: '#ffffff',
    container: 50 as const,
    onContainer: 800 as const,
    light: 100 as const,
    dark: 700 as const,
    border: 200 as const,
  },
};

// Default dark theme intent mappings
export const defaultDarkIntents = {
  primary: {
    palette: 'blue' as const,
    main: 400 as const,        // Lighter blue for dark backgrounds
    on: 'gray.900' as const,   // Dark text on light backgrounds
    container: 900 as const,   // Very dark blue container
    onContainer: 100 as const, // Light text on dark containers
    light: 300 as const,       // Light accent
    dark: 600 as const,        // Dark accent
    border: 300 as const,      // Border color
  },
  
  success: {
    palette: 'green' as const,
    main: 400 as const,
    on: 'gray.900' as const,
    container: 900 as const,
    onContainer: 100 as const,
    light: 300 as const,
    dark: 600 as const,
    border: 300 as const,
  },
  
  error: {
    palette: 'red' as const,
    main: 400 as const,
    on: 'gray.900' as const,
    container: 900 as const,
    onContainer: 100 as const,
    light: 300 as const,
    dark: 600 as const,
    border: 300 as const,
  },
  
  warning: {
    palette: 'orange' as const,
    main: 400 as const,
    on: 'gray.900' as const,
    container: 900 as const,
    onContainer: 100 as const,
    light: 300 as const,
    dark: 600 as const,
    border: 300 as const,
  },
  
  neutral: {
    palette: 'gray' as const,
    main: 400 as const,
    on: 'gray.900' as const,
    container: 200 as const,   // Lighter container for neutral
    onContainer: 800 as const, // Dark text on light container
    light: 300 as const,
    dark: 600 as const,
    border: 300 as const,
  },
  
  info: {
    palette: 'blue' as const,
    main: 400 as const,
    on: 'gray.900' as const,
    container: 900 as const,
    onContainer: 100 as const,
    light: 300 as const,
    dark: 600 as const,
    border: 300 as const,
  },
};

// Default light theme color mappings
export const defaultLightColors = {
  // Text colors
  text: {
    primary: 'gray.900' as const,      // Dark text
    secondary: 'gray.600' as const,    // Medium text
    disabled: 'gray.400' as const,     // Light text
    inverse: '#ffffff',                 // White text
    muted: 'gray.500' as const,        // Muted text
    placeholder: 'gray.400' as const,  // Placeholder text
  },
  
  // Surface colors
  surface: {
    primary: '#ffffff',                // White background
    secondary: 'gray.50' as const,     // Light gray background
    tertiary: 'gray.100' as const,     // Lighter gray background
    elevated: '#ffffff',                // Elevated surfaces (cards, etc.)
    overlay: 'rgba(0, 0, 0, 0.5)',    // Modal/overlay background
    inverse: 'gray.900' as const,      // Dark background
  },
  
  // Border colors
  border: {
    primary: 'gray.200' as const,      // Light border
    secondary: 'gray.300' as const,    // Medium border
    strong: 'gray.400' as const,       // Strong border
    focus: 'primary' as const,         // Focus border (references primary intent)
    disabled: 'gray.200' as const,     // Disabled border
  },
  
  // Interactive colors
  interactive: {
    hover: 'gray.50' as const,         // Hover background
    pressed: 'gray.100' as const,      // Pressed background
    focus: 'primary' as const,         // Focus color
    disabled: 'gray.100' as const,     // Disabled background
  },
  
  // Status colors (direct references to intents)
  primary: 'primary' as const,
  success: 'success' as const,
  error: 'error' as const,
  warning: 'warning' as const,
  neutral: 'neutral' as const,
  info: 'info' as const,
};

// Default dark theme color mappings
export const defaultDarkColors = {
  // Text colors
  text: {
    primary: 'gray.900' as const,      // Light text (gray.900 in dark theme = light)
    secondary: 'gray.600' as const,    // Medium text
    disabled: 'gray.400' as const,     // Dimmed text
    inverse: 'gray.50' as const,       // Dark text
    muted: 'gray.500' as const,        // Muted text
    placeholder: 'gray.400' as const,  // Placeholder text
  },
  
  // Surface colors
  surface: {
    primary: 'gray.50' as const,       // Dark background
    secondary: 'gray.100' as const,    // Lighter dark background
    tertiary: 'gray.200' as const,     // Medium dark background
    elevated: 'gray.100' as const,     // Elevated surfaces
    overlay: 'rgba(0, 0, 0, 0.8)',    // Darker overlay for dark theme
    inverse: 'gray.900' as const,      // Light background
  },
  
  // Border colors
  border: {
    primary: 'gray.200' as const,      // Dark border
    secondary: 'gray.300' as const,    // Medium border
    strong: 'gray.400' as const,       // Strong border
    focus: 'primary' as const,         // Focus border
    disabled: 'gray.200' as const,     // Disabled border
  },
  
  // Interactive colors
  interactive: {
    hover: 'gray.100' as const,        // Hover background
    pressed: 'gray.200' as const,      // Pressed background
    focus: 'primary' as const,         // Focus color
    disabled: 'gray.100' as const,     // Disabled background
  },
  
  // Status colors (direct references to intents)
  primary: 'primary' as const,
  success: 'success' as const,
  error: 'error' as const,
  warning: 'warning' as const,
  neutral: 'neutral' as const,
  info: 'info' as const,
};

// Common theme properties
export const commonThemeProperties = {
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
    xxxl: 48,
    xxxxl: 64,
  },
  
  borderRadius: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    xxl: 20,
    full: 9999,
  },
  
  typography: {
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      xxl: 24,
      xxxl: 32,
      xxxxl: 40,
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.15,
      shadowRadius: 16,
      elevation: 8,
    },
  },
  
  transitions: {
    fast: '0.15s ease',
    base: '0.2s ease',
    slow: '0.3s ease',
    button: 'all 0.2s ease',
    fade: 'opacity 0.2s ease',
    slide: 'transform 0.3s ease',
  },
  
  // Dynamic helper functions
  gap: (value: number) => value * 8,
  scale: (value: number) => value * 1.2,
  alpha: (color: string, alpha: number) => `${color}${Math.round(alpha * 255).toString(16).padStart(2, '0')}`,
};

// Create default light theme
export function createDefaultLightTheme() {
  const lightContext = createThemeContext(false);
  
  // Override context with default values
  lightContext.colorPalettes = defaultLightPalettes as any;
  lightContext.intentMappings = defaultLightIntents as any;
  lightContext.colorMappings = defaultLightColors as any;
  
  return {
    ...commonThemeProperties,
    
    // Color palettes - direct access to all color palettes
    palettes: defaultLightPalettes,
    
    // Intent system - for actionable components
    intents: Object.fromEntries(
      Object.entries(defaultLightIntents).map(([key, intent]: [string, any]) => [
        key,
        {
          main: resolveColor(`${intent.palette}.${intent.main}`, lightContext),
          on: resolveColor(intent.on, lightContext),
          container: resolveColor(`${intent.palette}.${intent.container}`, lightContext),
          onContainer: resolveColor(`${intent.palette}.${intent.onContainer}`, lightContext),
          light: resolveColor(`${intent.palette}.${intent.light}`, lightContext),
          dark: resolveColor(`${intent.palette}.${intent.dark}`, lightContext),
          border: resolveColor(`${intent.palette}.${intent.border}`, lightContext),
        }
      ])
    ),
    
    // Color system - for display components
    colors: {
      // Text colors
      text: {
        primary: resolveColor('text.primary', lightContext),
        secondary: resolveColor('text.secondary', lightContext),
        disabled: resolveColor('text.disabled', lightContext),
        inverse: resolveColor('text.inverse', lightContext),
        muted: resolveColor('text.muted', lightContext),
        placeholder: resolveColor('text.placeholder', lightContext),
      },
      
      // Surface colors
      surface: {
        primary: resolveColor('surface.primary', lightContext),
        secondary: resolveColor('surface.secondary', lightContext),
        tertiary: resolveColor('surface.tertiary', lightContext),
        elevated: resolveColor('surface.elevated', lightContext),
        overlay: resolveColor('surface.overlay', lightContext),
        inverse: resolveColor('surface.inverse', lightContext),
      },
      
      // Border colors
      border: {
        primary: resolveColor('border.primary', lightContext),
        secondary: resolveColor('border.secondary', lightContext),
        strong: resolveColor('border.strong', lightContext),
        focus: resolveColor('border.focus', lightContext),
        disabled: resolveColor('border.disabled', lightContext),
      },
      
      // Interactive colors
      interactive: {
        hover: resolveColor('interactive.hover', lightContext),
        pressed: resolveColor('interactive.pressed', lightContext),
        focus: resolveColor('interactive.focus', lightContext),
        disabled: resolveColor('interactive.disabled', lightContext),
      },
      
      // Status colors
      primary: resolveColor('primary', lightContext),
      success: resolveColor('success', lightContext),
      error: resolveColor('error', lightContext),
      warning: resolveColor('warning', lightContext),
      neutral: resolveColor('neutral', lightContext),
      info: resolveColor('info', lightContext),
      
      // Legacy colors for backward compatibility
      background: resolveColor('surface.primary', lightContext),
      textSecondary: resolveColor('text.secondary', lightContext),
      secondary: resolveColor('neutral', lightContext),
    },
  };
}

// Create default dark theme
export function createDefaultDarkTheme() {
  const darkContext = createThemeContext(true);
  
  // Override context with default values
  darkContext.colorPalettes = defaultDarkPalettes as any;
  darkContext.intentMappings = defaultDarkIntents as any;
  darkContext.colorMappings = defaultDarkColors as any;
  
  return {
    ...commonThemeProperties,
    
    // Color palettes - direct access to all color palettes
    palettes: defaultDarkPalettes,
    
    // Intent system - for actionable components
    intents: Object.fromEntries(
      Object.entries(defaultDarkIntents).map(([key, intent]: [string, any]) => [
        key,
        {
          main: resolveColor(`${intent.palette}.${intent.main}`, darkContext),
          on: resolveColor(intent.on, darkContext),
          container: resolveColor(`${intent.palette}.${intent.container}`, darkContext),
          onContainer: resolveColor(`${intent.palette}.${intent.onContainer}`, darkContext),
          light: resolveColor(`${intent.palette}.${intent.light}`, darkContext),
          dark: resolveColor(`${intent.palette}.${intent.dark}`, darkContext),
          border: resolveColor(`${intent.palette}.${intent.border}`, darkContext),
        }
      ])
    ),
    
    // Color system - for display components
    colors: {
      // Text colors
      text: {
        primary: resolveColor('text.primary', darkContext),
        secondary: resolveColor('text.secondary', darkContext),
        disabled: resolveColor('text.disabled', darkContext),
        inverse: resolveColor('text.inverse', darkContext),
        muted: resolveColor('text.muted', darkContext),
        placeholder: resolveColor('text.placeholder', darkContext),
      },
      
      // Surface colors
      surface: {
        primary: resolveColor('surface.primary', darkContext),
        secondary: resolveColor('surface.secondary', darkContext),
        tertiary: resolveColor('surface.tertiary', darkContext),
        elevated: resolveColor('surface.elevated', darkContext),
        overlay: resolveColor('surface.overlay', darkContext),
        inverse: resolveColor('surface.inverse', darkContext),
      },
      
      // Border colors
      border: {
        primary: resolveColor('border.primary', darkContext),
        secondary: resolveColor('border.secondary', darkContext),
        strong: resolveColor('border.strong', darkContext),
        focus: resolveColor('border.focus', darkContext),
        disabled: resolveColor('border.disabled', darkContext),
      },
      
      // Interactive colors
      interactive: {
        hover: resolveColor('interactive.hover', darkContext),
        pressed: resolveColor('interactive.pressed', darkContext),
        focus: resolveColor('interactive.focus', darkContext),
        disabled: resolveColor('interactive.disabled', darkContext),
      },
      
      // Status colors
      primary: resolveColor('primary', darkContext),
      success: resolveColor('success', darkContext),
      error: resolveColor('error', darkContext),
      warning: resolveColor('warning', darkContext),
      neutral: resolveColor('neutral', darkContext),
      info: resolveColor('info', darkContext),
      
      // Legacy colors for backward compatibility
      background: resolveColor('surface.primary', darkContext),
      textSecondary: resolveColor('text.secondary', darkContext),
      secondary: resolveColor('neutral', darkContext),
    },
  };
}

// Export the themes
export const defaultLightTheme = createDefaultLightTheme();
export const defaultDarkTheme = createDefaultDarkTheme(); 