module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
      '@typescript-eslint/array-type': [
          'error',
          { default: 'array' }
      ],
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/dot-notation': 'off',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      '@typescript-eslint/no-inferrable-types': [
          'off',
          {
              ignoreParameters: true
          }
      ],
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-unused-expressions': ['error'],
      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/no-implied-eval': ['error'],
      '@typescript-eslint/no-unused-vars': [
          'warn',
          { argsIgnorePattern: '^_' }
      ],
      '@typescript-eslint/indent': ['warn'],
      '@typescript-eslint/quotes': ['error', 'single'],
      '@typescript-eslint/semi': ['warn', 'always'],
      '@typescript-eslint/explicit-member-accessibility': [
          'error',
          { accessibility: 'no-public' }
      ],
      '@typescript-eslint/ban-types': ['off'],
      '@typescript-eslint/no-empty-function': ['off'],
      '@typescript-eslint/no-empty-interface': ['error'],
      '@typescript-eslint/no-misused-new': ['error'],
      '@typescript-eslint/no-non-null-assertion': ['error'],
      '@typescript-eslint/unified-signatures': ['error'],
      '@typescript-eslint/member-ordering': [
          'error',
          {
              default: [
                  // Fields

                  'public-instance-field',
                  'protected-instance-field',
                  'private-instance-field',

                  // Constructors
                  'public-constructor',

                  // Methods
                  'public-instance-method',
                  'protected-instance-method',
                  'private-instance-method'
              ]
          }
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/prefer-regexp-exec': 'off',
      'arrow-parens': ['error', 'always'],
      'brace-style': 'off',
      'default-case': 'error',
      "sort-imports": [1, {
          "ignoreCase": true,
          "ignoreDeclarationSort": true,
          "ignoreMemberSort": false,
          "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
          "allowSeparatedGroups": false
      }],
      'eqeqeq': ['error', 'always'],
      'id-blacklist': 'off',
      'id-match': 'off',
      'import/no-unassigned-import': 'off',
      'max-classes-per-file': ['error', 5],
      'max-len': [
          'error',
          {
              code: 110
          }
      ],
      'non-nullish':'off',
      'no-multiple-empty-lines': 'error',
      'no-trailing-spaces': 'off',
      'no-underscore-dangle': 'off',
      'valid-jsdoc': 'off',
      'jsdoc/no-types': 'off',
      'comma-dangle': 'off',
      'prefer-arrow/prefer-arrow-functions': 'off',
      'no-console': [
          'warn',
          { allow: ['warn', 'error'] }
      ],
      'no-unused-expressions': 'off',
      'no-shadow': 'off',
      'no-unused-vars': 'off',
      "indent": ["warn", 4, { "SwitchCase": 1 }],
      'no-empty-function': 'off',
      'no-lonely-if': 'error',
      'curly': 'error',
      'no-implied-eval': 'off',
      'radix': 'error',
      'sort-keys': 'off',
      'prefer-const': 'error',
      'quotes': 'off',
      'semi': 'off',
      'space-before-blocks': 1,
      'no-case-declarations': 'off',
      'no-unexpected-multiline': 'off',
      'no-var': 'off'
  },
};