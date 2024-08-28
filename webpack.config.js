const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const config = {
  // set to false because __dirname resolving to / instead of absolute path when
  // built using webpack
  node: {
    __dirname: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  // set to development to read .env.local variables
  mode: 'development'
};

const serverConfig = Object.assign({}, config, {
  // set target to node to fix build warnings
  target: 'node',
  name: 'server',
  entry: __dirname + '/index.js',
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'index.js'
  },
  // webpack-node-externals package used to exclude other packages like express
  // in the final bundle.js
  externals: [nodeExternals()]
});

module.exports = [serverConfig];