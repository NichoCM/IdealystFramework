import { defineConfig } from 'vite'
import { reactRouter } from "@react-router/dev/vite";

export default defineConfig({
    plugins: [
      reactRouter()
    ],
});

// https://vitejs.dev/config/
/*export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['react-native-unistyles/plugin', {
          root: 'src',
        }]],
      },
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 5173
  },
  resolve: {
    alias: {
      // Use absolute path to resolve react-native-web properly
      'react-native': path.resolve(__dirname, 'node_modules/react-native-web'),
      '@react-native/normalize-colors': path.resolve(__dirname, 'node_modules/@react-native/normalize-colors'),
    },
    // Platform-specific file resolution
    extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.js', '.jsx'],
    // Ensure proper resolution of package exports
    conditions: ['browser', 'import', 'module', 'default']
  },
  define: {
    global: 'globalThis',
    __DEV__: JSON.stringify(true),
  },
  optimizeDeps: {
    include: [
      'react-native-web',
      '@react-native/normalize-colors',
      'react-native-unistyles',
      'react-native-unistyles/web',
    ],
    exclude: [
      'react-native-edge-to-edge',
      'react-native-nitro-modules',
    ],
  },
}*/