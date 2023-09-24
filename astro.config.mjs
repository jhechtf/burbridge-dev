import { defineConfig } from 'astro/config';
import { resolve } from 'node:path';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";
import react from "@astrojs/react";

// https://astro.build/config
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    resolve: {
      alias: {
        '~': './',
        '@': resolve('./components'),
        'config': resolve('./configs/config.json')
      }
    }
  }
});