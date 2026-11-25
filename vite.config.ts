import { defineConfig } from 'vitest/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [tailwindcss()],

  test: {
    globals: true,
    environment: 'jsdom',
  },
});
