const path = require('path');

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['react-native-unistyles/plugin', {
      debug: true,
      root: 'src',
      autoProcessImports: ['@idealyst/components', '@idealyst/navigation', '@idealyst/theme'],
      autoProcessPaths: [path.resolve(__dirname, '../components/src'),
        path.resolve(__dirname, '../navigation/src'),
        path.resolve(__dirname, '../theme/src'),
      ],
    },],
    'react-native-reanimated/plugin'
  ]
};