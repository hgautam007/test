import jsdoc from "eslint-plugin-jsdoc";

export default [
  {
    files: ["**/*.js"],
    ignores: ["**/*.config.js"],
    plugins: { jsdoc },
    rules: {
      "jsdoc/require-description": "error",
      "jsdoc/check-values": "error",
      semi: "error",
    },
  },
];
