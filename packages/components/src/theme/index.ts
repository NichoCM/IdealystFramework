// Re-export themes from the main unistyles configuration
export { 
  lightTheme, 
  darkTheme, 
} from '../unistyles';

export {
  breakpoints,
} from './breakpoints';

// Re-export default themes
export {
  defaultLightTheme,
  defaultDarkTheme,
  createDefaultLightTheme,
  createDefaultDarkTheme,
  commonThemeProperties,
} from './defaultThemes';

export type {
  AppTheme,
  AppIntents,
  AppColors,
  AppPalettes,
  IntentNames,
  ColorNames,
} from '../unistyles';

// Re-export color system
export { 
  colorPalettes,
  intentMappings,
  colorMappings,
  darkThemeOverrides,
} from './colors';

export type {
  ColorPalette,
  ColorShade,
  IntentName,
  ColorName
} from './colors';

// Re-export color utilities
export {
  resolveColor,
  createThemeContext,
  getIntentColors,
  getPaletteColors,
  isValidColorReference,
  getColorWithOpacity,
  lightThemeContext,
  darkThemeContext,
} from './colorResolver';

export type {
  ColorReference,
  ThemeContext,
} from './colorResolver';

// Import themes for local use
import { lightTheme, darkTheme } from '../unistyles';
import { breakpoints } from './breakpoints';

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

 