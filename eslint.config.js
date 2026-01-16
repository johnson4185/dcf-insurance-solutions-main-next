/**
 * ESLint Configuration
 * 
 * Linting rules for TypeScript and React code.
 * Uses flat config format (ESLint 9+).
 * 
 * @see https://eslint.org/docs/latest/use/configure/configuration-files-new
 */

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Ignore build output and dependencies
  { ignores: ["dist", ".next", "out", "node_modules"] },
  {
    // Extend recommended configs
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    
    // Apply to TypeScript files
    files: ["**/*.{ts,tsx}"],
    
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    
    // React and TypeScript plugins
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    
    rules: {
      // React Hooks rules for proper hook usage
      ...reactHooks.configs.recommended.rules,
      
      // Warn about components that should use Fast Refresh
      "react-refresh/only-export-components": [
        "warn", 
        { allowConstantExport: true }
      ],
      
      // Disable unused vars warning (TypeScript handles this better)
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { 
          argsIgnorePattern: "^_", 
          varsIgnorePattern: "^_" 
        }
      ],
      
      // Allow explicit any when necessary (with comment)
      "@typescript-eslint/no-explicit-any": "warn",
      
      // Enforce consistent return types
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
);
