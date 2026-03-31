import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    css: true,
    exclude: ['**/node_modules/**', '**/dist/**', 'src/App.test.js', 'src/App.test.jsx'],
  },
});
