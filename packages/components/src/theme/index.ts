// Re-export themes from the main unistyles configuration
export { lightTheme, darkTheme, breakpoints } from '../unistyles';

// Import themes for local use
import { lightTheme, darkTheme, breakpoints } from '../unistyles';

// For backward compatibility with existing components
export const appThemes = {
  light: lightTheme,
  dark: darkTheme,
} as const;

export type AppThemes = typeof appThemes;
export type AppBreakpoints = typeof breakpoints;

// Note: In Unistyles v3, themes are configured through declaration merging
// No need for explicit configuration calls - just import this file
console.log('✅ Unistyles v3 themes ready:', Object.keys(appThemes));

 