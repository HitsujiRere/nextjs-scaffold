/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    darkTheme: 'dark',
    themes: ['garden', 'forest'],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  theme: {
    extend: {},
  },
};
