const prettierConfig = require('./.prettierrc.js');

module.exports = {
    root: true,
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: ['plugin:@typescript-eslint/recommended', 'next/core-web-vitals', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint'],
    rules: {
        // Possible errors
        'no-console': 'warn',
        // Best practices
        'dot-notation': 'error',
        'no-else-return': 'error',
        'no-floating-decimal': 'error',
        'no-sequences': 'error',
        // Stylistic
        'array-bracket-spacing': 'error',
        'computed-property-spacing': ['error', 'never'],
        curly: 'error',
        'no-lonely-if': 'error',
        'no-unneeded-ternary': 'error',
        'one-var-declaration-per-line': 'error',
        quotes: [
            'error',
            'single',
            {
                allowTemplateLiterals: false,
                avoidEscape: true,
            },
        ],
        // ES6
        'array-callback-return': 'off',
        'prefer-const': 'error',
        // Imports
        'import/prefer-default-export': 'off',
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
            },
        ],
        'no-unused-expressions': 'off',
        'no-prototype-builtins': 'off',
        // React
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/href-no-hash': [0],
        'react/display-name': 0,
        'react/no-deprecated': 'error',
        'react/no-unsafe': [
            'error',
            {
                checkAliases: true,
            },
        ],
        'react/jsx-sort-props': [
            'error',
            {
                ignoreCase: true,
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'prettier/prettier': ['error', prettierConfig],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
