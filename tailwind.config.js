/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_theme: "#111218",
        secondary_theme: "#fff",
        tertiary_color: "#ff8a41",
        quaternary_color: "#1777cb",
      },
      screens: {
        "3xl": "1700px",
        "1.5xl": "1450px",
        "extra-sm": "500px",
      },
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
      },
    },
  },
  plugins: [],
};
