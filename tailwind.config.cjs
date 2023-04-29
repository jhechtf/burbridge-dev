/* eslint-disable no-undef */
/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ["'Ubuntu'", 'sans-serif'],
      },
      display: {
        content: 'content'
      }
    }
  },
  content: [
    'components/**/*.vue',
    'src/**/*.vue',
    'src/**/*.astro'
  ],
  variants: {},
  plugins: [],
}
