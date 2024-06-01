module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mobile: "350px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        gray: {
          100: "#f5f5f5",
          200: "#ededed",
          700: "#656565",
          800: "#3c3c3c",
          "700_01": "#6a6a6a",
        },
        indigo: { 500: "#F56563" },
        orange: { 400: "#E54988" },
      },
      boxShadow: {
        xs: "1px -2px  4px 3px #0000000f",
        sm: "0px 4px  4px 0px #0000000c",
        md: "0px 4px  4px 0px #0000000a",
      },
      fontFamily: {
        proxima: ["Proxima Nova"],
      },
    },
  },
};
