const path = require('path');

module.exports = {
  module: {
    loaders: []
  },
  sassLoader: {},
  context: path.resolve(__dirname, '../'),
  resolve: {
    extensions: ['.js', '.json', '.vue', '.ts', '.scss', '.jpg', '.html'],
    root: path.resolve(__dirname),
    alias: {
      '@': path.resolve(__dirname),
      '~': path.resolve(__dirname),
      'vue$': 'vue/dist/vue.esm.js',
      'normalize.css': path.resolve(__dirname, '/node_modules/normalize.css/normalize.css'),
    },
  }
};
