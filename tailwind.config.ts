/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')
const indielayer = require('@indielayer/ui/tailwind.preset')

export default <Partial<Config>>{
  // load indielayer ui presets
  presets: [indielayer()],
  // allow PurgeCSS to analyze components
  content: [
    './index.html',
    './app.vue',
    './**/*.vue',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/@indielayer/ui/{lib,src}/**/*',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.emerald,
        secondary: colors.slate,
        success: colors.green,
        warning: colors.yellow,
        error: colors.red,
      },
    },
  },
  plugins: [],
}
