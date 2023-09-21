/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: "Nunito Sans",
      },
      backgroundImage: {
        "hero-image": "url('/images/bg.jpg')",
        "contact-image": "url('/images/contact.jpg')"
      },
      colors: {
        grayLight: "#CFCFCF",
        grayMedium: "#AEAEAE",
        grayDark: "#9D9D9D",
        midnightBlue: "#191D88",
        sapphire: "#1450A3",
        dodgerBlue: "#337CCF",
        yellow: "#F7D449",
      },
      boxShadow: {
        cardShadow: "0px 0px 5px 10px rgba(0,0,0,0.1)",
      }
    },
  },
  plugins: [],
}
