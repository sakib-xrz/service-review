/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#CAA151",

          light: "#EDEDED",

          dark: "#191D1E",

          "base-100": "#191D1E",

          info: "#80C0E5",

          success: "#6CEFB8",

          warning: "#EABE2E",

          error: "#E73C5E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
