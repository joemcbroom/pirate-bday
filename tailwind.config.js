/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen': '100svh',
      },
      width: {
        'screen': '100svw',
      }
    },
  },
  plugins: [],
}