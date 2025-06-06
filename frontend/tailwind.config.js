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
      colors: {
        primary: '#BF2025', // Màu chính từ .logo
        inputBg: '#F5F6F5', // Màu nền của input
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
  ],
  
}
