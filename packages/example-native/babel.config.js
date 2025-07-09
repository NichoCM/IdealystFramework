const path = require('path');

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['react-native-unistyles/plugin', {
      debug: true,
      root: 'src',
      autoProcessImports: ['@idealyst/components', '@idealyst/navigation'],
      autoProcessPaths: [path.resolve(__dirname, '../components/src')],
    },],
    'react-native-reanimated/plugin'
  ]
};