/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#453fdb",
        primary_bg: "#ececfc",
        secondary: "#26a4ff",
        tertiary: "#56cdad",
        fake_bg: "#f8f8fe",
        stroke: "#d6ddeb",
        faint_text: "#828998",
        dark_text: "#25324b",
        service_orangebg: "#fdf3eb",
        service_orange: "#ffb836",
        job_type_color: "#56cdad",
        job_type_bg: "#eefaf7",
        white: "#ffffff",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },

      clipPath: {
        "custom-shape":
          "polygon(20% 0%, 100% 0, 100% 80%, 80% 100%, 0 100%, 0% 20%)",
      },
      fontFamily: {
        arp: "arp",
      },
    },
  },
  plugins: [],
};
