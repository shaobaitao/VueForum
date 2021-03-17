module.exports = {
  devServer: {
    proxy: {
      '/forumAPI': {
        target: 'http://forum.shaobaitao.cn',
        ws: true,
        changeOrigin: true
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
