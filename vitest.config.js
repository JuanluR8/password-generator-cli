import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    alias: {
			'@': '/src',
		},
    commandLine: true,
    include: [
      '__tests__/*.{test,spec}.js'
    ],
  }
});