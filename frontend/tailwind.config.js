/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        blackItalic: ['BlackItalic', 'sans-serif'],
        regular: ['Regular', 'sans-serif'],
        semiBold: ['SemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
  ],
  
}
