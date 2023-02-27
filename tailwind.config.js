/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: "Nunito Sans",
      },
      backgroundImage: {
        "hero-image": "url('/assets/bg.jpg')",
        "contact-image": "url('/assets/contact.jpg')"
      },
      colors: {
        designColor: "#F7D449",
        textColor: "#AEAEAE"
      },
      boxShadow: {
        cardShadow: "0px 0px 5px 10px rgba(0,0,0,0.1)",
      }
    },
  },
  plugins: [],
}
