/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      padrao: 'Arial, Helvetica, sans-serif',
    },
    extend: {
      keyframes: {
        animeLeft: {
          '0%': {
            transform: 'translateX(-20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        loading: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        animeLeft: 'animeLeft .3s forwards',
        loading: 'loading 1s infinite',
      },
    },
  },
  plugins: [],
};
