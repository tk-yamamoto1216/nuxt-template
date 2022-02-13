module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
    'stylelint-rscss', // RSCSS用
    'stylelint-config-recommended-vue',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'custom-property-pattern': false,
  },
}
