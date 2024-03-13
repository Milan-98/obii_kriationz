/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "gold":'#ba933e',
        "dark":'#151828',
        "white":"#ffffff",
        "black":"#1b1a1a",
        "secondWhite" :"#e2e4e7",
        "slightDark":"#38344a",
        "transparentDark":"#60526e",
      }
    },
  },
  plugins: [],
}