/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        '3/7': '42.857143%',
        '4/7': '57.142857%',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')], 
  safelist: ["animate-ping", "bg-green-300", "bg-green-400", "bg-green-500",]  
};