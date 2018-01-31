module.exports = {
    'env': {
        'es6': true,
        'node': true,
        'browser': true
    },
    'extends': [
        'eslint:recommended',
        'standard'
    ],
    'rules': {
        'comma-dangle': ['error', 'always-multiline'],
        'sort-imports': 'error',
        'indent': ['error', 4, {
            'SwitchCase': 1
        }],
        'space-before-function-paren': ['error', {
            'anonymous': 'always',
            'named': 'never'
        }],
        'semi': ['error', 'always']
    }
};
