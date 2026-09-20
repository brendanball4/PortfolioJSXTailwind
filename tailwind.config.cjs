/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',"./src/**/*.{jsx,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'Inter', 'sans-serif'],
      },
      colors: {
        paper: '#faf7f3',
        ink: '#171311',
        // warm terracotta pulled from the brick in the hero photo
        accent: {
          300: '#f2b98f',
          400: '#e69a62',
          500: '#d4773b',
          600: '#b85f2a',
          700: '#944a20',
          800: '#6e3717',
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in forwards",
        fadeOut: "fadeOut 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 }
        },
      },
    },
  },
  plugins: [],
}
