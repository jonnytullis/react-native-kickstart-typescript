module.exports = {
    env: {
        browser: true,
        es2021: true,
        'react-native/react-native': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'react-native',
    ],
    rules: {
        'array-bracket-spacing': [ 'warn', 'always' ],
        'comma-dangle': [ 'error', 'always-multiline' ],
        'eol-last': [ 'warn', 'always' ],
        'func-call-spacing': [ 'warn', 'never' ],
        indent: [ 'warn', 4 ],
        'max-len': [ 'error', { code: 120 } ],
        'no-multiple-empty-lines': [ 'warn', { max: 1 } ],
        'no-multi-spaces': 'warn',
        'no-trailing-spaces': 'warn',
        'no-unused-vars': 'error',
        'object-curly-spacing': [ 'warn', 'always' ],
        'react/prop-types': 'off',
        'react-native/split-platform-components': 'error',
        'react-native/no-inline-styles': 'error',
        'react-native/no-color-literals': 'error',
        'react-native/no-raw-text': 'error',
        'react-native/no-single-element-style-arrays': 'warn',
        'space-before-blocks': [ 'warn', 'always' ],
        quotes: [ 'error', 'single' ],
        'quote-props': [ 'error', 'as-needed', { unnecessary: true } ],
    },
}
