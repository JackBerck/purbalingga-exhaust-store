/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{php,html}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontSize: {
        xxs: "0.6rem",
      },
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
        header: "url('./src/img/header.png')",
        signUp: "url('./src/img/login-sign-up/sign-up.png')",
        signIn: "url('./src/img/login-sign-up/sign-in.png')",
      },
    },
  },
  plugins: [],
};
