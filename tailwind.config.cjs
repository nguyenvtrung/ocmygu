/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        TrungQuicksand: ['Quicksand', 'sans-serif']
      },
      spacing : {
        'vw': '100vw',
        'vh' : '100vh'
      }
    },
  },
  plugins: [],
}