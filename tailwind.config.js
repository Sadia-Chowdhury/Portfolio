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
      }
    },
  },
  plugins: [],
};
