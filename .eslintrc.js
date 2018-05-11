module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended'],
  plugins: ['import'],
  globals: {
    Buffer: true,
    process: true,
    cordova: true,
    __statics: true,
  },
  rules: {
    'import/first': 0,
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,

    'global-require': 0,
    'function-paren-newline': 0,
    'no-empty-pattern': 0,
    quotes: [2, 'single'],
  },
};
