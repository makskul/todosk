module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  rules: {
    'quotes': ['error', 'single'],
    'jsx-quotes': [2, 'prefer-double']
  },
  extends: [
    '@wemake-services/typescript/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh']
}
