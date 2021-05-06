module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['prettier', 'plugin:vue/essential', 'eslint:recommended'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        arrowParens: 'always',
        endOfLine: 'auto'
      }
    ],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'no-empty': 'error',
    'no-var': 'error',
    'no-unsafe-finally': 'off',
    'no-useless-escape': 'off',
    'nuxt/no-cjs-in-config': 'off',
    camelcase: ['off'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ]
  },
  globals: {
    $nuxt: true,
    test: 'readonly',
    expect: 'readonly',
    it: 'readonly',
    describe: 'readonly',
    jest: 'readonly',
    afterAll: 'readonly',
    beforeAll: 'readonly',
    afterEach: 'readonly',
    beforeEach: 'readonly'
  }
};
