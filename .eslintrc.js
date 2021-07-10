module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    plugins: [
        'simple-import-sort',
        'modules-newline'
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
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

        // react rules
        'react/require-default-props': 'off',

        // line length rules
        'max-len': [
            'error',
            {
                comments: 120,
                code: 80,
                ignoreUrls: true,
            },
        ],

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
        'linebreak-style': [
            'error',
            'unix',
        ],
        semi: [
            'error',
            'always',
        ],
        quotes: [
            'error',
            'single',
        ],
        'arrow-parens': [
            'error',
            'always',
        ],
    },
};
