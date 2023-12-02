/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        beige: '#EBEAE8', 
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
    container:{center:true}
  },
  plugins: [],
}