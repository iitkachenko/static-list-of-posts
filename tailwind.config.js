/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EAE6F4",
          100: "#D3CAE8",
          200: "#A998D2",
          300: "#7D62BB",
          400: "#583F92",
          500: "#39295F",
          600: "#2F224E",
          700: "#271C40",
          800: "#1E1632",
          900: "#130E20",
          950: "#0F0B19"
        },
      }
    },
  },
  plugins: [],
}