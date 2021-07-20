const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        fadeOut: 'fadeOut .3s forwards'
      },
      colors: {
        primary: '#3491DF',
        primaryDark: '#3C51E9',
        secondary: '#E70000',
        secondaryDark: '#D20708',
        success: '#3DCC54',
        warning: '#F1CC24',
        error: '#F14624',
        info: '#FAF0B0'
      }
    }
  },
  variants: {},
  plugins: []
};
