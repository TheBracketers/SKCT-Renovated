const defaultTheme = require('tailwindcss/defaultTheme');

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
    rotate: ['active', 'focus', 'group-hover', 'hover', 'group-focus'],
    extend: {},
  },
  plugins: [],
};
