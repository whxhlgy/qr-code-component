/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      outfit: ["Outfit, sans-serif"]
    },
    extend: {
      colors: {
        'bg': '#D5E1EF',
      },
      gridTemplateRows: {
        'footer' : '1fr auto'
      }
    },
  },
  plugins: [],
}