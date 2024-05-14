/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#9370DB",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
      fontFamily: {
        kodemono: '"Kode Mono"',
        poppins: '"Poppins"',
      },
      backgroundImage: {
        header: "url('/src/img/header.png')",
      },
    },
  },
  plugins: [],
};
