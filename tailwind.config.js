/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00C853',
        'primary-dark': '#00796B',
        'secondary': '#F9FAFB',
        'text': '#1E293B',
        'accent': {
          100: '#E6F7EF',
          200: '#B3EBDC',
          300: '#80DFC9',
          400: '#4DD3B7',
          500: '#00C853',
          600: '#00796B',
          700: '#006055',
          800: '#004D40',
          900: '#00332B'
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}