/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { UserConfig, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()] as UserConfig['plugins'],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    setupFiles: './setup.ts',
    environment: 'jsdom',
  },
});
