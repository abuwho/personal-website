/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./hugo/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['EB Garamond', 'Alex Brush', 'ui-sans-serif', 'system-ui'],
        cursive: ['Alex Brush', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}

