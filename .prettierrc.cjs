
/* eslint-env node */ module.exports = {
  $schema: 'https://json.schemastore.org/prettierrc',
  semi: false,
  tabWidth: 4,
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'all',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.js',
}
