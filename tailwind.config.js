const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {

  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sardo: ['Sardo Bold', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        teko: ["Teko", "sans-serif"],

      },
      colors: {
       'neutralSilver':'#F5F7FA',
       'neutralDGrey':'#4D4D4D',
       'brandPrimary':'#223351',
       'neutralGrey':'#717171',
       'gray900':'#18191F',
       'secundaryColor':'#8AC15D'

      },
    },
  },
  plugins: [ 
    flowbite.plugin(),
  ],
  
}
