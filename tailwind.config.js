/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{html,js}' ],
  theme: {
    extend: {
      colors: {
        'uoc-corporate': '#b91b0b',
        'uoc-masterbrand': '#f6e9d6',
      }
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [],
}
