import { defineConfig } from 'astro/config';
import { resolve } from 'node:path';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind(), react()],
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