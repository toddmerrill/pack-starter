const path = require('path');
const webpack = require('webpack');

const rules = [
  {
    test: /\.js?$/,
    exclude: /(node_modules)/,
    use: [{
      loader: 'babel-loader',
      options: {
        presets: [
          'env',
          'stage-2',
        ],
        plugins: [],
      },
    },
    ],
  }];

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules,
  },
};
