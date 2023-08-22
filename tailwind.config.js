/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      Open_Sans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
