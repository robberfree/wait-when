const path = require('path');
const nodeConfig = {
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'wait-when.js',
    libraryTarget: 'commonjs2' //The return value of the entry point will be assigned to the module.exports.
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },
  mode: 'production'
};

const webConfig = {
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'wait-when.min.js',
    library: 'ww' //暴露的全局变量
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },
  mode: 'production'
};

module.exports = [nodeConfig, webConfig];
