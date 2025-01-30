const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(alert|button|dropdown|form|input|spinner|ripple|menu|divider|popover).js"
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui()],
}

