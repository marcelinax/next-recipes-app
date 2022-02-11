
module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'next/core-web-vitals'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react' 
    ], 
    'rules': {
        'react/prop-types': [0],
        indent: ['error', 4], 
        'react/jsx-filename-extension': ['off'],
        'react/prefer-stateless-function': ['off'],
        'arrow-body-style': ['off'],
        'no-multi-spaces': ['error'],
        'react/self-closing-comp': ['error', {
            'component': true,
            'html': true
        }],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-unused-vars': ['off'],
        'import/no-anonymous-default-export': ['off']
    }
};