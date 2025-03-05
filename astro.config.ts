import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://makeinaai.github.io/website/', // Ensure this matches your GitHub Pages subdirectory
  base: '/website/', // Set the correct base path for GitHub Pages
  output: 'static', // Default output directory
  build: {
    assets: 'assets', // This should be correct, but GitHub Pages may ignore underscores
  },
});