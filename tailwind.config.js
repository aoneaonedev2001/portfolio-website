/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // 'sm': { min: '375px', max: '767px' },
      sm: { max: "767px" },
      // => @media (min-width: 640px) { ... }

      md: { min: "768px", max: "1080px" },
      // => @media (min-width: 1024px) { ... }

      // 'lg': { min: '1280px', max: '1535px' },
      lg: { min: "1081px" },
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}