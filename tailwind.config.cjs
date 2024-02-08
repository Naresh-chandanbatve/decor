/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0A0E0D",
        primary: "6CA18F",
        accent: "#20332D",
        text2: "#E0E0E0",
        text_hint: "#4D4D4D",
        text_link: "#88AAA3",
        white: "#ffffff",
        grey: "#6D6D6D",
        dark_grey: "#0A0910",
      },
    },
  },
  plugins: [],
}

