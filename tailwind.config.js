const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Tomato Grotesk", ...defaultTheme.fontFamily.sans],
        secondary: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary-black": "#050606",
        "primary-orange": "#E65112",
        "primary-white": "#F9F6F0",
        "secondary-yellow": "#E2DF08",
        "secondary-blue": "#16314E",
      },
    },
  },
  plugins: [],
};
