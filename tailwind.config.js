/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark_blue": "hsl(209, 23%, 22%)",
        "very_dark_blue_dark": "hsl(207, 26%, 17%)",
        "very_dark_blue_light": "hsl(200, 15%, 8%)",
        "dark_gray": "hsl(0, 0%, 52%)",
        "very_light_gray": "hsl(0, 0%, 98%)",
        "white": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        "nunito_sans": ["Nunito Sans", "sans-serif"]
      }
    },

  },
  plugins: [],
}

