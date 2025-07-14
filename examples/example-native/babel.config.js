const path = require('path');

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['react-native-unistyles/plugin', {
      debug: true,
      root: 'src',
      autoProcessImports: ['@idealyst/components', '@idealyst/navigation', '@idealyst/theme'],
      autoProcessPaths: [
        path.resolve(__dirname, '../../packages/components/src'),
        path.resolve(__dirname, '../../packages/navigation/src'),
        path.resolve(__dirname, '../../packages/theme/src'),
      ],
    },],
    ['module-resolver', {
      alias: {
        '@idealyst/components': path.resolve(__dirname, '../../packages/components/src'),
        '@idealyst/navigation': path.resolve(__dirname, '../../packages/navigation/src'),
        '@idealyst/theme': path.resolve(__dirname, '../../packages/theme/src'),
      },
    }],
    'react-native-reanimated/plugin',
  ],
};