module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  globals: {
    use: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    semi: [2, "always"],
    'nuxt/no-cjs-in-config': 'off',
    'indent': ['error', 4],
    'vue/html-indent': ['error', 4],
    'semi-spacing': ['error', {'before': false, 'after': true}],
    'space-before-function-paren': ["error", {"anonymous": "always", "named": "never", "asyncArrow": "always"}]
  }
}
