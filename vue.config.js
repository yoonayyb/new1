// require('./src/js');

const a = require('./src/hjk');

module.exports = {

  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  baseUrl: './', // 因为在cordova 打开文件的形式是file://协议
  outputDir: 'D:/app/app1/www',
  lintOnSave: false,
  //
  // chainWebpack: (config) => {
  //   // 修复HMR
  //   config.resolve.symlinks(true);
  // },
  devServer: {
    proxy: a.proxy,
  },
  css: {
    sourceMap: false,
    modules: false,
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/global.scss` 这个文件
        data: '@import "@/global.scss";',
      },
    },
  },
};
