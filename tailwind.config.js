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
        '800i': '800 italic',
      },

      screens: {
        'sm': '640px',     
        'md': '768px',     
        'lg': '1024px',    
        'xl': '1280px',   
      }
    },

    borderRadius: {
      '2xl': '1rem',
      '3xl': '1.5rem',
      '7xl': '5rem',   
      'lg': '0.5rem',
      'full': '999px'
    },
    skew: {
      '20': '-20deg',
    },
  },
  plugins: [],
}