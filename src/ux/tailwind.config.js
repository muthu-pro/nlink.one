/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'space-dark': '#000000',
        'space-purple': '#1a1a1a',
        'space-blue': '#0f0f0f',
      },
      fontFamily: {
        'megrim': ['Megrim', 'cursive'],
        'offside': ['Offside', 'cursive'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spinReverse 25s linear infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-up': 'floatUp 0.8s ease-out forwards',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};