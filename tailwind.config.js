/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-brown': '#7A4B4B',
        'light-brown' : '#BF722E',
        'medium-brown' : '#916060',
        'box': '#f2eae6'
      },
      fontFamily: {
         'code' : ['Fira Code','sans-serif'],
         'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}