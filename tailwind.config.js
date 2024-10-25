const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-primary)", ...defaultTheme.fontFamily.sans],
        secondary: ["var(--font-secondary)", ...defaultTheme.fontFamily.sans],
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
