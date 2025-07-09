const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

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
    platforms: ['android', 'ios', 'web'],
    // Prioritize .native extensions for React Native
    sourceExts: ['native.tsx', 'native.ts', 'tsx', 'ts', 'native.jsx', 'native.js', 'jsx', 'js', 'json'],
    // Ensure proper resolution of native index files
    resolverMainFields: ['react-native', 'browser', 'main'],
    // Custom resolver to handle native component imports
    resolveRequest: (context, moduleName, platform) => {
      // For components package internal imports, resolve to native versions
      if (moduleName.startsWith('../') && platform && (platform === 'android' || platform === 'ios')) {
        const nativeModuleName = moduleName + '/index.native';
        try {
          return context.resolveRequest(context, nativeModuleName, platform);
        } catch (e) {
          // Fall back to default resolution
        }
      }
      // Default resolution
      return context.resolveRequest(context, moduleName, platform);
    },
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

module.exports = wrapWithReanimatedMetroConfig(mergeConfig(getDefaultConfig(__dirname), config));
