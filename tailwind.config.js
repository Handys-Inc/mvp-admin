/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          sans: ["Satoshi"],
          serif: ["Satoshi"],
          mono: ["Satoshi"],
          display: ["Satoshi"],
          body: ["Satoshi"],
        },
        colors: {
          primary: " #CE1449",
          secondary: "#EFE4D9",
          lightSecondary: "#FFECF1",
          mute: "#DDDDDD",
          gray: "#626262",
          faintGray: "#99989821",
          lightGray: "#FAFAFA",
        },
        icons: {
          
        }
      },
    },
    plugins: [require("@tailwindcss/forms")],
  };