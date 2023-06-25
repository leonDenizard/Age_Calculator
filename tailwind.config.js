/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {

      colors: {
        primary: {
          purple: 'hsl(259, 100%, 65%)',
          'light-red': 'hsl(0, 100%, 67%)'
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
          'off-white': 'hsl(0, 0%, 94%)',
          'light-grey': 'hsl(0, 0%, 86%)',
          'smoke-grey':  'hsl(0, 1%, 44%)',
          'off-black': 'hsl(0, 0%, 8%)'
        }
      },

      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        '400i': '400 italic',
        '700': '700',
        '800': '800 italic',
      },

      screens: {
        'custom': '468px',
      }
    },
  },
  plugins: [],
}