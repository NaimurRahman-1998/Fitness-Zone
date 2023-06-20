/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      mono: ['Montserrat', 'sans-serif']
    },
  },
  plugins: [require("daisyui")],
}
