module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './common/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
    extend: {},
  },
  plugins: [],
};
