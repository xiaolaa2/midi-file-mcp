import { defineConfig } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'

export default defineConfig([
  { ignores: ['dist/**/*'] },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: globals.browser,
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      js
    },
    rules: tseslint.configs.recommended.rules
  },
  {
    rules: {
      quotes: ['error', 'single'],
      'no-debugger': 'error',
      semi: ['error', 'never'],
      '@typescript-eslint/no-explicit-any': 'off',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
      'max-len': ['error', { code: 128, ignoreComments: true }],
      'function-paren-newline': ['error', 'multiline'],
      'function-call-argument-newline': ['error', 'consistent'],
      'array-element-newline': ['error', 'consistent'],
      'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    }
  }
],)