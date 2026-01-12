/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'romantic-pink': '#FFE4E6',
        'blush': '#FFC1CC',
        'cream': '#FFF8DC',
        'light-gold': '#F7E7CE',
        'pastel-red': '#FFB3BA',
        'soft-pink': '#F8BBD9'
      },
      fontFamily: {
        'cursive': ['Dancing Script', 'cursive'],
        'elegant': ['Playfair Display', 'serif'],
        'romantic': ['Great Vibes', 'cursive']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-heart': 'pulse-heart 2s ease-in-out infinite',
        'sparkle': 'sparkle 3s linear infinite',
        'typewriter': 'typewriter 4s steps(40) 1s forwards'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'pulse-heart': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' }
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' }
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        }
      }
    },
  },
  plugins: [],
}