/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins-Light': ['poppins-Light'],
        'poppins-Bold': ['poppins-Bold'],
        'poppins-Regular': ['poppins-Regular'],
      }
    },
  },
  plugins: [flowbite.plugin(),],
}

