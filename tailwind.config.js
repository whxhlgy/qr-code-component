/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      outfit: ["Outfit, sans-serif"]
    },
    extend: {
      gridTemplateRows: {
        'footer' : '1fr auto'
      }
    },
  },
  plugins: [],
}