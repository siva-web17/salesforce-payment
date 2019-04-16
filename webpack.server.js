const path = require('path');

const nodeExternals = require('webpack-node-externals');
module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: ['babel-polyfill','./server.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: './build'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  }
};
