module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    minHeight: {
      50: '50px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};