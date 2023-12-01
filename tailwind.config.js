/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "primary": {
          900: "#004d40",
          800: "#00695c",
          700: "#00796b",
          600: "#00897b",
          500: "#009688",
          400: "#26a69a",
          300: "#4db6ac",
          200: "#80cbc4",
          100: "#b2dfdb",
          50: "#e0f2f1"
        }
      },
      screens: {
        "md": "840px",
      },
      boxShadow: {
        "designProjectCard": ["rgba(0, 0, 0, 0.16) 0px 3px 6px", "0px 3px 6px rgba(0, 0, 0, 0.23)"],
        "reverseShadow": ["rgba(0, 0, 0, 0.16) 0px -4px 4px 2px"],
        "innerShadow": ["inset 0px 0px 16px -2px rgba(0, 0, 0, 0.25)", "rgba(0, 0, 0, 0.16) 0px 3px 6px"]
      }
    },
  },

  plugins: [],
}
