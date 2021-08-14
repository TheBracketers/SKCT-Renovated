const defaultTheme = require('tailwindcss/defaulttheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './common/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'ipad-pro': '1095px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
    rotate: ['active', 'group-hover', 'hover'],
    extend: {},
  },
  plugins: [],
};
