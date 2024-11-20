module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-serif'], // Define la fuente primaria
      },
      keyframes: {
        slide: {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(100%)'},
        },
      },
      animation: {
        slide: 'slide 60s linear infinite',
      },
    },
  },
  plugins: [],
};
