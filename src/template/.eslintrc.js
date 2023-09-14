module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb',
    '@nuxt/eslint-config',
  ],
  overrides: [
    {
      files: ['nuxt.config.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    // 'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
  },
};
