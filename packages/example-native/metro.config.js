const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration for yarn workspaces
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  projectRoot: __dirname,
  resolver: {
    nodeModulesPaths: [
      path.resolve(__dirname, '../../node_modules'),
      path.resolve(__dirname, 'node_modules'),
    ],
    platforms: ['native', 'android', 'ios', 'web'],
    // Prioritize .native extensions for React Native
    sourceExts: ['native.tsx', 'native.ts', 'tsx', 'ts', 'native.jsx', 'native.js', 'jsx', 'js', 'json'],
    // Exclude cache and build folders
    blockList: [
      /.*\/\.yarn-cache\/.*/,
      /.*\/node_modules\/.*\/\.bin\/.*/,
      /.*\/\.git\/.*/,
      /.*\/android\/build\/.*/,
      /.*\/ios\/build\/.*/,
    ],
  },
  watchFolders: [
    path.resolve(__dirname, '../components'),
    path.resolve(__dirname, '../navigation'),
    path.resolve(__dirname, 'src'),
  ],
  watcher: {
    additionalExts: ['native.tsx', 'native.ts', 'native.jsx', 'native.js'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
