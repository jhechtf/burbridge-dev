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
      keyframes: {
        wave: {
          "0%": {
            rotate: "-6deg",
          },
          "50%": {
            rotate: "6deg",
          },
          "100%": {
            rotate: "0deg"
          }
        },
        bob: {
          "0%": {
            translate: '0 25%',
            opacity: '0'
          },
          '100%': {
            translate: '0 0',
            opacity: '1'
          }
        }
      },
      animation: {
        wave: "wave 1s ease-in-out infinite",
        'slide-fade': 'bob 1s ease-in 1'
      },
      fontFamily: {
        display: ["'Ubuntu'", "sans-serif"],
      },
      display: {
        content: "content",
      },
    },
  },
  content: ["components/**/*.vue", "src/**/*.vue", "src/**/*.astro", "src/**/*.{ts,tsx}"],
  variants: {},
  plugins: [
    require('@tailwindcss/container-queries')
  ],
};
