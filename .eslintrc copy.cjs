module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    "plugin:@typescript-eslint/recommended",
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-explicit-any": "off",
  },
  parserOptions: {
    ecmaVersion: "latest", // Use the latest ECMAScript features
    sourceType: "module", // Allows for the use of imports
    project: ["./tsconfig.json", "./tsconfig.node.json"], // Points to your TypeScript config files
    tsconfigRootDir: __dirname, // Sets the root directory for the tsconfig paths
  },
  settings: {
    react: {
      version: 'detect',  // Automatically detect the React version
    },
  },
};
