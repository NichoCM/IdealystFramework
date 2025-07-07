import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
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
    extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.js', '.jsx']
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
    ],
    exclude: [
      'react-native-edge-to-edge',
      'react-native-nitro-modules',
    ],
  },
}) 