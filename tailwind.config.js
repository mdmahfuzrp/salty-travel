/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F66F4D",
        black: "#2D3134",
        secondBlack: "#5B5F62",
        lightWhite: "#FAF8ED"
      },
      boxShadow: {
        card: "0px 24px 90px 0px #c0bca138"
      }
    },
  },
  plugins: [],
}

