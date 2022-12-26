const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // webpack devServer 提供了代理的能力，该代理可以把所有请求到当前服务器中的请求，转发代理到另一个服务器上
  devServer: {
    proxy: {
      // 当地址中含有 /api 的时候，触发此代理
      '/api': {
        target: 'https://xxxxxx',
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      // provide global variables
      sass: {
        prependData: `
          @import "~@/styles/mixins.scss";
        `
      }
    }
  },
  chainWebpack (config) {
    config.module.rule('svg').exclude.add(resolve('src/assets/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
