module.exports = {
  root: true,
  env: {
    browser: true,
    'jest/globals': true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  plugins: ['jest', 'prettier'],
  // add your custom rules here
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
  },
};
