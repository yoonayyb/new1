module.exports = {
  proxy: {

    '/api': {
      target: 'http://api.douban.com/v2/movie/top250',
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        '^/api': '',
      },
    },
    '/xinlang': {
      target: 'http://www.baidu.com',
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        '^/xinlang': '',
      },
    },
  },
};
