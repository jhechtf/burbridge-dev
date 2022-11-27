/* eslint-disable no-undef */
import { resolve } from 'path';
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Jim Burbridge',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    base: '/'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#eee' },
  /*
  ** Global CSS
  */
  css: [
    '@mdi/font/css/materialdesignicons.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  server: {
    port: 8000,
    hostname: 'burbridge.localhost'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    extend(config, ctx) {
    }
    */
    extractCSS: true,
    /**
     *
     * @param {any} config
     */
    extend(config) {
      config.resolve.alias.config = resolve(process.cwd(), 'configs', 'config.json')
    }
  }
}
