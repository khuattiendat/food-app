/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'bg-orange': '#E16120',
    },
    gridTemplateColumns: {
      "grid-cl": "repeat(4, 1fr)"
    }
  },
  plugins: [],
}

