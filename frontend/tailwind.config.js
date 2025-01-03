/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        colors: {
        rosa: "#ec4899",
        rosa_oscuro:"#be185d", 
        negro: "#020617", 
        gris: "#6b7280", 
        blanco:"#FFFFFF",
        bordercolor: "#e5e7eb",
        },
        fontFamily: {
            sans: ["'Poppins'", "sans-serif"], // Fuente principal
            serif: ["'Merriweather'", "serif"], // Fuente opcional
        },
    },
  },
  plugins: [],
  }