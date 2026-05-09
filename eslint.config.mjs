import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // Security-focused rules
  {
    rules: {
      // Prevent dangerous HTML injection
      "react/no-danger": "error",
      "react/no-danger-with-children": "error",
      // Prevent eval usage (XSS vector)
      "no-eval": "error",
      "no-implied-eval": "error",
      // Prevent insecure randomness
      "no-new-object": "off",
      // Proper error handling
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
]);

export default eslintConfig;
