/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        lighthover: '#fcf4ff',
        darkhover: '#2a004a',
        darktheme: '#11001F',
      },
      fontFamily: {
        'Outfit': ['Outfit', 'sans-serif'],
        'Ovo': ['Ovo', 'sans-serif'],
      },
      boxShadow: {
        'black' : '4px 4px 0 #000',
        'white' : '4px 4px 0 #fff'
      }
    },
  },
  plugins: [],
};
