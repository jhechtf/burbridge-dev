import { defineConfig } from 'astro/config';
import { resolve } from 'node:path';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    vue(),
    tailwind()
  ],
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