module.exports = {
  plugins: ["stylelint-declaration-strict-value"],
  rules: {
    "scale-unlimited/declaration-strict-value": [
      "/color/",
      {
        disableFix: true,
        ignoreValues: [
          "currentcolor",
          "inherit",
          "initial",
          "transparent",
          "unset",
          "white",
        ],
      },
    ],
  },
};
