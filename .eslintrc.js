/*
 * eslint 配置文件
 * author: zhijie
 */

module.exports = {
    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },

    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],

    rules: {
        useTabs: 0,
        'vue/multi-word-component-names': [
            'error',
            {
                ignores: ['index'],
            },
        ],
    },
};
