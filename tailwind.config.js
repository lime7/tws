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
      textColor: {
        'blue-900': '#0F2852'
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
        '7xl': '5rem',
        'normal': '1.2'
      },
      borderRadius: {
        '7xl': '5rem',
        '8xl': '6rem'
      },
      spacing: {
        49: '12.5rem'
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
