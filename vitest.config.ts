import { getViteConfig } from 'astro/config';
import vue from '@vitejs/plugin-vue';

export default getViteConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom'
  }
});