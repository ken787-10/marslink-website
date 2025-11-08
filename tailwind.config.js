/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./*.html",
      "./about/*.html", 
      "./assets/**/*.html",
      "./cabintime/**/*.html",
      "./ceo/**/*.html",
      "./css/**/*.js",
      "./js/**/*.js",
      "./**/*.html"
    ],
    theme: {
      extend: {
        fontFamily: {
          'orbitron': ['Inter', 'sans-serif'],
          'roboto': ['Roboto', 'sans-serif'],
        },
        animation: {
          'reverse-spin': 'reverse-spin 15s linear infinite',
          'pulse-slow': 'pulse 3s ease-in-out infinite',
          'float': 'float 6s ease-in-out infinite',
          'glow': 'glow 2s ease-in-out infinite alternate',
        },
        keyframes: {
          'reverse-spin': {
            '0%': { transform: 'rotate(360deg)' },
            '100%': { transform: 'rotate(0deg)' },
          },
          'float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          'glow': {
            '0%': { boxShadow: '0 0 5px rgba(78, 195, 255, 0.2)' },
            '100%': { boxShadow: '0 0 20px rgba(78, 195, 255, 0.8)' },
          },
        },
        backdropBlur: {
          'xs': '2px',
        },
        transitionDuration: {
          '2000': '2000ms',
        },
        animationDelay: {
          '300': '300ms',
          '500': '500ms',
          '700': '700ms',
          '1000': '1000ms',
        },
      },
    },
    plugins: [],
  }