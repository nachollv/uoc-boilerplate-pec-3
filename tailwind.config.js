/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{html,js}' ],
  theme: {
    extend: {
      colors: {
        'uoc-corporate': '#b91b0b',
        'uoc-masterbrand': '#f6e9d6',
      },
      fontFamily: {
        sans: [ "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
        "Helvetica Neue", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol"],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [],
}
