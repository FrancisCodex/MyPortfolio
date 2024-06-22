/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="forest"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["cupcake", "dark", "light", "forest"],
  },
}

