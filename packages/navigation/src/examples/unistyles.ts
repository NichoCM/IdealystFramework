import { breakpoints } from '@idealyst/components/src/theme/breakpoints';
import { extendedThemes } from '@idealyst/components/src/examples/extendedTheme';
import { StyleSheet } from 'react-native-unistyles';

StyleSheet.configure({
  themes: {
    light: extendedThemes.light,
    dark: extendedThemes.dark,
  },
  settings: {
    initialTheme: 'light',
  },
  breakpoints,
});



