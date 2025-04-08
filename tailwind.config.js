/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'main-bg': 'hsl(217, 54%, 11%)',
        'card-bg': 'hsl(216, 50%, 16%)',
      },
    },
  },
  plugins: [],
}