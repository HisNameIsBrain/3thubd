import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // 1. Root Isolation: Ignore build artifacts and node_modules
  globalIgnores(['dist', 'node_modules', '.convex']),

  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        // Adding support for the Convex environment if needed
        process: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // Recommended Defaults
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // 2. Custom Naming Policy: Supports ETHUB_2.10 style variables
      'no-unused-vars': ['error', { 
        varsIgnorePattern: '^[A-Z_]',
        argsIgnorePattern: '^_' 
      }],

      // 3. UI/UX Consistency: Ensure React Refresh is used correctly for Vite
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // 4. Clean Memory Policy: Prevent 'console.log' spam in production
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
])
