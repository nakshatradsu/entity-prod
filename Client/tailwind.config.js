const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,jsx,ts,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      green: colors.green,
      purple: colors.purple,
      blue: colors.blue,
      red: colors.red,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: "#fe7b55",
    },
  },
  plugins: [],
};
