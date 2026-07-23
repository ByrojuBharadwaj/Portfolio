/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "#EFC39C",
        accent: "#E49B5A",
        dark: "#8A4C16",
        neutral: "#EEEEEE",
        homeHeader: "#E5AA70",
        tealAccent: "#3b9fad",
        grayAccent: "#5c5b5b",
        redHighlight: "#CF4647",
        yellowHighlight: "rgba(249, 218, 127, 0.83)",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Quicksand", "sans-serif"],
        mono: ["Source Code Pro", "monospace"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}