/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FFF8E7",
        secondary: "#a69f94",
        point: "#9d60f8",
        tertiary: "#2e2d2c",
        "black-100": "#c4bdb1",
        "black-200": "#202020",
        "white-100": "#f3f3f3",
        "point-100": "rgba(157, 96, 248, 0.85)",
        "point-200" : "bc93fc",
        "yellow-200": "#f2be11",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        item: "0px 3px 12px -1px rgba(110, 55, 190, 0.6)",
        item2: "0px 3px 12px -1px rgba(190, 100, 40, 0.6)",
        profile: "0px 3px 24px 2px rgba(91, 65, 47, 0.22)"
      },
      screens: {
        xs: "360px",
      },
      backgroundImage: {
        "profile": "url('/src/assets/profile.png')",
      },
    },
  },
  plugins: [],
};
