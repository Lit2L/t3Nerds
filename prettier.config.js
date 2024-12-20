/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions & import('@ianvs/prettier-plugin-sort-imports').PluginConfig} } */
const config = {
  endOfLine: 'lf',
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  // importOrder: [
  //   '^(react/(.*)$)|^(react$)',
  //   '^(next/(.*)$)|^(next$)',
  //   '<THIRD_PARTY_MODULES>',
  //   '',
  //   '^types$',
  //   '^@/env(.*)$',
  //   '^@/types/(.*)$',
  //   '^@/config/(.*)$',
  //   '^@/lib/(.*)$',
  //   '^@/hooks/(.*)$',
  //   '^@/components/ui/(.*)$',
  //   '^@/components/(.*)$',
  //   '^@/styles/(.*)$',
  //   '^@/app/(.*)$',
  //   '',
  //   '^[./]'
  // ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss'
  ]
}

export default config
