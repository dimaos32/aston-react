module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-console": "warn",
    "import/prefer-default-export": "off",
    "react/jsx-no-useless-fragment": [
      "error",
      {
        "allowExpressions": true
      }
    ],
    "no-unused-expressions": "error",
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": true
      }
    ],
    "arrow-body-style": ["error", "as-needed"],
  },
};
