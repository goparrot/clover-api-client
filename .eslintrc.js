/**
 * How to install and use
 * @link {https://www.arden.nl/setting-up-a-gatsby-js-starter-with-type-script-es-lint-prettier-and-pre-commit-hooks}
 * @link {https://github.com/goparrot/eslint-config}
 * One rule documentation
 * @link {https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md}
 */
module.exports = {
    root: true,
    env: {
        node: true,
        es2020: true,
        jest: true,
    },
    extends: ['@goparrot/eslint-config/recommended', '@goparrot/eslint-config/less-strict'],
    parserOptions: {
        project: './tsconfig.eslint.json',
    },
    rules: {
        camelcase: 'off',
        'spaced-comment': ['error', 'always'],
        'array-callback-return': ['error', { checkForEach: true }],
        'use-isnan': ['error', { enforceForSwitchCase: true, enforceForIndexOf: true }],
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE'],
            },
            {
                selector: 'parameter',
                format: ['camelCase'],
                leadingUnderscore: 'allow',
            },
            {
                selector: 'memberLike',
                modifiers: ['private'],
                format: ['camelCase'],
                leadingUnderscore: 'require',
            },
            {
                selector: 'typeLike',
                format: ['PascalCase'],
            },
            {
                selector: 'class',
                prefix: ['Clover'],
                format: ['PascalCase'],
            },
            {
                selector: 'interface',
                prefix: ['IClover'],
                format: ['PascalCase'],
            },
            {
                selector: 'enum',
                prefix: ['Clover'],
                suffix: ['Enum'],
                format: ['PascalCase'],
            },
            {
                selector: 'enumMember',
                format: ['camelCase', 'UPPER_CASE'],
            },
        ],
    },
};
