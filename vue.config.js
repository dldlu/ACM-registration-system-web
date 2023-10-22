const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    allowedHosts: [
      'reg.dluacm.cn', // 允许访问的域名地址，
    ],
    proxy: {
      '/api': {
        target: 'http://bm.dluacm.cn',
        changeOrigin: true,
        pathRewrite:{ "^/api":"" }
      },
    }
  }
})
