module.exports = {
  globals: {
    server: true,
  },
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'ember',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'airbnb-base',
    'prettier',
  ],
  env: {
    browser: true
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        'tabWidth': 2,
        'printWidth': 100,
        'singleQuote': true,
        'trailingComma': 'es5',
        'arrowParens': 'always'
      }
    ],
    'func-names': 'off',
    'prefer-arrow-callback': 'off',
    'import/extensions': 0,
    'import/first': 0,
    'no-underscore-dangle': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'arrow-body-style': 'off',
    'no-console': 'off'
  },
  overrides: [
    // node files
    {
      files: [
        'ember-cli-build.js',
        'testem.js',
        'config/**/*.js',
        'lib/*/index.js'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      }
    }
  ]
};
