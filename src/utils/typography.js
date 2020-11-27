import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  googleFonts: [
    {
      name: "Red Rose",
      styles: [400],
    },
    {
      name: "Roboto",
      styles: [400],
    },
  ],
});

typography.injectStyles();

export default typography;
