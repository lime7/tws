module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        // padding: '15px'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      },
      fontSize: {
        '32xl': '2rem',
        '6xl': '4rem',
        '7xl': '5rem'
      },
      lineHeight: {
        '48xl': '3rem',
        '7xl': '5rem'
      },
      borderRadius: {
        '7xl': '5rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
