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
          primary: "#CE1449",
          secondary: "#EFE4D9",
          lightSecondary: "#FFECF1",
          mute: "#DDDDDD",
          gray: "#626262",
          faintGray: "#99989821",
          lightGray: "#FAFAFA",
          green: "#1A8808",
          lightGreen: "#1ED800",
          backgroundGreen: "#D7FFDB",
          brown: "#B94E12",
          red: "#FA0000",
          backgroundRed: "#FFCAD9",
          black: "#282828",
          pink: "#FF7BA1",
          lightPink: "#FFCAD9",
          lightOrange: "#FFEFD7",
          orange: "#B94E12"
        },
        icons: {
          
        }
      },
    },
    plugins: [require("@tailwindcss/forms")],
  };