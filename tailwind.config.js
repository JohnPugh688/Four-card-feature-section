/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Red: "#EA5353",
        Cyan: "#45D3D3",
        Orange: "#FCAF4A",
        Blue: "#549EF2",
        VeryDarkBlue: " #4C4E61",
        GrayishBlue: "#A3A5AE",
        VeryLightGrey: "#FAFAFA",
      },

      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
