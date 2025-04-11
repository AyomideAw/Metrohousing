import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-undef": "warn", // Show warnings instead of errors for undefined variables
      "no-unused-vars": "warn", // Show warnings instead of errors for unused variables
      "@typescript-eslint/no-require-imports": "warn", // Warn instead of error for require imports
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },

];