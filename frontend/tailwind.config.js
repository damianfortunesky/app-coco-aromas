/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-orange": "#F25C45",
        "brand-dark-orange": "#D65943",
        "brand-white": "#FFFFFF",
        "brand-black": "#0A0A0A",
        "brand-gray": "#4B4B4B",
        "brand-pink-1": "#f7598f",
        "brand-pink-2": "#ce2d6e",
        "brand-creme-1": "#fef1eb",
        "brand-creme-2": "#fcd4c2",
        "brand-creme-3": "#fbc6ad",
        "brand-brown-1": "#ffe3ba",
        "brand-brown-2": "#f1cba3",
        "brand-brown-3": "#e3b28b",
      },
      fontFamily: {
        sans: ["'Poppins'", "sans-serif"], // Fuente principal
        serif: ["'Merriweather'", "serif"], // Fuente opcional
      },
    },
  },
  plugins: [],
};
