const { ModuleKind } = require("typescript");

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
  ],
  extends: [
    "eslint:recommended",
    "plugins:@typescript-eslint/recommended",
  ]
}