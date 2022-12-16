import { defineConfig } from 'vitest/config';

// vitest config only
export default defineConfig({
  test: {
    includeSource: [
      './**/*.test.{js|ts|jsx|tsx}',
      './**/*.spec.{js|ts|jsx|tsx}',
    ],
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.ts'],
  },
});
