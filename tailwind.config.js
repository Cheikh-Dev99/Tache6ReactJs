/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dark: "#1f2937",
        gray: {
          200: "#e5e7eb",
          600: "#4b5563",
        },
        g1: "#25564b",
        g2: "#90D4C6",
        g3: "#458c7e",
        g4: "#23303e",
        b1: "#19536b",
        greyTitle: "#23303e",
        greyText: "#818498",
      },
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
      },
    },
  },
  plugins: [],
};
