module.exports = {
    env: {
        browser: true,
        es6: true,
        'jest/globals': true,
        jest: true,
    },
    parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'simple-import-sort',
        'modules-newline',
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jest/recommended',
        'airbnb-typescript',
    ],
    rules: {
        // indent rules
        indent: 'off',
        '@typescript-eslint/indent': [
            'error',
            4,
        ],
        'react/jsx-indent-props': [
            'error',
            4,
        ],
        'react/jsx-indent': [
            'error',
            4,
        ],

        // line length rules
        'max-len': [
            'error',
            {
                comments: 256,
                code: 120,
                ignoreUrls: true,
            },
        ],

        // typescript rules
        '@typescript-eslint/no-explicit-any': 'off',

        // react rules
        'react/require-default-props': 'off',
        'react/prop-types': 'off',

        // jsx rules
        'react/jsx-filename-extension': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/react-in-jsx-scope': 'off',

        // import rules
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/prefer-default-export': 'off',
        'modules-newline/import-declaration-newline': 'error',
        'modules-newline/export-declaration-newline': 'error',

        // newline rules
        'array-bracket-newline': [
            'error',
            { minItems: 2 },
        ],
        'array-element-newline': [
            'error',
            { minItems: 2 },
        ],
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    multiline: true,
                    minProperties: 2,
                },
                ObjectPattern: {
                    multiline: true,
                    minProperties: 2,
                },
                ImportDeclaration: {
                    multiline: true,
                    minProperties: 2,
                },
            },
        ],
        'object-property-newline': [
            'error',
            { allowAllPropertiesOnSameLine: false },
        ],
        'react/jsx-first-prop-new-line': [
            1,
            'multiline',
        ],
        'react/jsx-max-props-per-line': [
            1,
            { maximum: 1 },
        ],

        // misc rules
        'no-await-in-loop': 'off',
        'no-process-env': 'off',
        'linebreak-style': 0, // <-- Fixing the LF/CRLF issue
        semi: [
            'error',
            'always',
        ],
        quotes: [
            2,
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        'arrow-parens': [
            'error',
            'always',
        ],
    },
};
