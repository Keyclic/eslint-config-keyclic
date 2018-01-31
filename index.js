module.exports = {
  'env': {
    'es6': true,
    'node': true,
    'browser': true
  },
  'extends': [
    'eslint:recommended',
    'ionic',
    'standard'
  ],
  'rules': {
    'comma-style': ['error'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'indent': ['error', 4, {
      'SwitchCase': 1
    }],
    'newline-before-return': ['error'],
    'newline-per-chained-call': ['error'],
    'no-process-env': ['off'],
    'no-undefined': ['error'],
    'no-unused-vars': ['warn'],
    'quotes': ['error', 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'quote-props': ['error', 'always'],
    'valid-jsdoc': ['off', {
      'prefer': {
        'return': 'returns'
      },
      'requireParamDescription': false,
      'requireReturnDescription': false
    }],
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never'
    }]
  }
};
