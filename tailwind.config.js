const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5ddee2",
        "primary-foreground": "#1b181e",

        icons: "#5ddee2",
        "icons-light": "#5ddee257",
        "icons-bg": "#5ddee2",
        "shadow-dark": "#373939",
        "bg-shadow-dark": "#373939",
        "shadow-light": "#1b181e",
        "main-bg": "#1b181e",
      },
      boxShadow: {
        custom: "1px 1px 2px #5ddee2, -1px -1px 2px #5ddee2",
        "custom-2": "1px 1px 2px #5ddee2, -1px -1px 2px #5ddee2",
      },
      keyframes: {
        mymove: {
          "50%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        mymove: "mymove 4s infinite ease-in-out",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
