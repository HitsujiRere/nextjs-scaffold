/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: ['garden', 'forest'],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  theme: {
    extend: {},
  },
};
