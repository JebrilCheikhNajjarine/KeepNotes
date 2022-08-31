/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#202124",
      },
      animation: {
        "animate-pulse": "pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
      },
    },
    fontFamily: {
      Montserrat: "Montserrat",
    },
  },
  plugins: [],
};
