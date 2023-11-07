module.exports = {

    parserOptions: {
        'ecmaVersion': 12,
        'sourceType': 'module',
    },

    env: {
        'browser': true,
        'commonjs': true,
        'es2021': true,
        'node': true,
    },

    plugins: [
        'neverblued',
    ],

    rules: {

        // my space rule
        'neverblued/space-outside': 'error',

        // conflicting core rules
        'func-call-spacing': 'off',
        'no-whitespace-before-property': 'off',
        'space-before-blocks': 'off',
        'space-before-function-paren': 'off',

        // other space core rules
        'array-bracket-spacing': [ 'error', 'always' ],
        'arrow-spacing': [ 'error' ],
        'block-spacing': [ 'error' ],
        'comma-spacing': [ 'error' ],
        'computed-property-spacing': [ 'error' ],
        'key-spacing': [ 'error' ],
        'keyword-spacing': [ 'error' ],
        'no-multi-spaces': [ 'error' ],
        'no-trailing-spaces': [ 'error' ],
        'object-curly-spacing': [ 'error', 'always' ],
        'rest-spread-spacing': [ 'error', 'always' ],
        'semi-spacing': [ 'error', { before: false, after: true } ],
        'space-in-parens': [ 'error', 'never' ],
        'space-infix-ops': [ 'error' ],
        'space-unary-ops': [ 'error', { words: true, nonwords: true } ],

        // rest core rules
        'accessor-pairs': 'off',
        'array-bracket-newline': [ 'error', 'consistent' ],
        'array-callback-return': [ 'error' ],
        'array-element-newline': [ 'error', 'consistent' ],
        'block-scoped-var': [ 'error' ],
        'brace-style': [ 'error', 'stroustrup', { allowSingleLine: true } ],
        'camelcase': [ 'error', { properties: 'always' } ],
        'capitalized-comments': 'off',
        'comma-dangle': [ 'error', 'always-multiline' ],
        'comma-style': [ 'error', 'last' ],
        'consistent-return': 'off',
        'consistent-this': 'off',
        'curly': [ 'error', 'multi-line' ],
        'dot-location': [ 'error', 'property' ],
        'dot-notation': 'off',
        'eol-last': [ 'error', 'always' ],
        'func-name-matching': 'off',
        'func-names': [ 'error', 'as-needed' ],
        'func-style': 'off',
        'function-call-argument-newline': [ 'error', 'consistent' ],
        'function-paren-newline': [ 'error', 'multiline' ],
        'implicit-arrow-linebreak': [ 'error', 'beside' ],
        'indent': [ 'error', 4, { SwitchCase: 1 } ],
        'line-comment-position': 'off',
        'linebreak-style': [ 'error', 'unix' ],
        'lines-around-comment': 'off',
        'lines-between-class-members': 'off',
        'max-depth': [ 'error', 4 ],
        'max-len': [ 'error', 120 ],
        'max-lines': [ 'warn', 666 ],
        'max-lines-per-function': 'off',
        'max-statements': [ 'warn', 15 ],
        'max-statements-per-line': [ 'error', { max: 10 } ],
        'multiline-comment-style': 'off',
        'multiline-ternary': [ 'warn', 'always-multiline' ],
        'new-cap': [ 'error' ],
        'new-parens': [ 'warn', 'never' ],
        'newline-per-chained-call': 'off',
        'no-array-constructor': [ 'error' ],
        'no-extra-parens': [ 'error' ],
        'no-magic-numbers': [ 'error', { ignore: [ 1 ] } ],
        'no-multiple-empty-lines': [ 'error', { max: 1, maxEOF: 0 } ],
        'no-tabs': [ 'error' ],
        'no-ternary': 'off',
        'no-unused-vars': [ 'warn' ],
        'nonblock-statement-body-position': [ 'error', 'beside' ],
        'object-curly-newline': [ 'error', { consistent: true } ],
        'object-property-newline': [ 'error', { allowAllPropertiesOnSameLine: true } ],
        'radix': [ 'error', 'always' ],
        'semi': [ 'error', 'never' ],
        'semi-style': [ 'error', 'first' ],
        'sort-keys': 'off',
        'wrap-regex': 'off',
        'yoda': [ 'error' ],
        // TODO process all the rules

        // override vue
        'vue/html-indent': [ 'error', 4 ],
        'vue/max-attributes-per-line': [ 'error', { singleline: 2 } ],
        'vue/multiline-html-element-content-newline': [
            'error',
            {
                allowEmptyLines: true,
            },
        ],

    },

}
