/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       poppins :['Poppins','sans-serif'],
       lato :['Lato','sans-serif'],
       ProtestRiot : ['Protest Riot','sans-serif']
       },
    },
  },
  plugins: [require("daisyui")],
}