import tsPlugin from '@typescript-eslint/eslint-plugin';

export default {
  ignores: ['node_modules/**', 'dist/**'], // แทน .eslintignore
  languageOptions: {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    globals: {
      window: 'readonly',
      document: 'readonly',
      process: 'readonly',
    },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: {
    '@typescript-eslint': tsPlugin,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-prototype-builtins': 'warn',
    'no-async-promise-executor': 'warn',
  },
};
