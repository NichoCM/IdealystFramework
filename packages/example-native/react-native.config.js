const path = require('path');

module.exports = {
  project: {
    ios: {},
    android: {},
  },
  dependencies: {
    // Handle workspace packages
    '@idealyst/components': {
      root: path.join(__dirname, '../components'),
    },
  },
  // Additional configuration for workspace
  watchFolders: [
    path.resolve(__dirname, '../components'),
    path.resolve(__dirname, '../../node_modules'),
  ],
}; 