// eslint.config.mjs
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: 2021, // atau bisa menggunakan 12
      sourceType: 'module',
      globals: globals.browser,
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      // Tambahkan aturan lain yang Anda butuhkan
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    extends: ["plugin:@next/next/recommended", "next/core-web-vitals"],
  },
];  
