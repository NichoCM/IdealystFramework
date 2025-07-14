import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [
        ['react-native-unistyles/plugin', {
          root: 'src',
        }],
        ['@idealyst/components/plugin/web', {
          root: 'src',
        }]
      ],
    },
  })],
  resolve: {
    alias: {
      // Use absolute path to resolve react-native-web properly
      'react-native': path.resolve(__dirname, 'node_modules/react-native-web'),
      '@react-native/normalize-colors': path.resolve(__dirname, 'node_modules/@react-native/normalize-colors'),
    },
    extensions: ['.web.js', '.web.ts', '.web.tsx', '.js', '.ts', '.tsx', '.json']
  },
  define: {
    global: 'globalThis'
  },
  server: {
    port: 3000,
    host: true
  }
}); 