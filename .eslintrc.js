// module.exports = {
//   parser: '@typescript-eslint/parser', // Specifies the ESLint parser
//   plugins: ['@typescript-eslint'],
//   extends: [
//     'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
//     'airbnb-base',
//     'plugin:prettier/recommended' // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
//   ],
//   parserOptions: {
//     ecmaVersion: 6, // Allows for the parsing of modern ECMAScript features
//     sourceType: 'module' // Allows for the use of imports
//   },
//   env: { jest: true },
//   rules: {
// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
// e.g. "@typescript-eslint/explicit-function-return-type": "off",
//   }
// };

// module.exports = {
//   parser: '@typescript-eslint/parser',
//   plugins: ['@typescript-eslint'],
//   extends: [
//     'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
//     'airbnb-base',
//     'plugin:prettier/recommended' // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
//   ],
//   parserOptions: {
//     ecmaVersion: 6,
//     sourceType: 'module'
//   },
//   env: { jest: true },
//   rules: {}
// };

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      files: ['**/*.ts'],
      parserOptions: {
        parser: '@typescript-eslint-parser'
      }
    }
  ]
};
