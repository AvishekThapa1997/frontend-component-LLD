/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xs": "414px",
        xs: "540px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
