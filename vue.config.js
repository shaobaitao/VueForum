module.exports = {
  devServer: {
    proxy: {
      '/forumAPI': {
        target: 'http://shaobaitao.cn',
        ws: true,
        changeOrigin: true
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
