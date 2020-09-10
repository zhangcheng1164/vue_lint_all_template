const StyleLintPlugin = require('stylelint-webpack-plugin')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  assetsDir: 'static',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 32,
            propList: ['*'],
          }),
        ],
      },
    },
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('./src'))

    config.plugin('stylelint-plugin').use(StyleLintPlugin, [
      {
        files: ['src/**/*.{vue,html,css,scss}'],
        fix: true,
      },
    ])
  },
}
