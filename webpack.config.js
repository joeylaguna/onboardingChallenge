const webpack = require('webpack');
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'public/compiled');
const APP_DIR = path.resolve(__dirname, 'public/components');
const config = {
  entry: APP_DIR + '/index.js',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};
module.exports = config;