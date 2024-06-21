/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth:{
        "8":"80px"
      },
      colors:{
        Border:{
          default:"#1B1212"
        },
        Square:{
          primary:"#732E11",
          secondary:"#FFE8DE"
        },
        Piece:{
          primary:"#FFFFFF",
          secondary:"black",
        },
      }
    },
  },
  plugins: [],
}