const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'cra_flask',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: [
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              targets: { browsers: ['last 2 chrome versions'] },
              debug: true,
            }],
            '@babel/preset-react',
          ],
          plugins: [
            'react-hot-loader/babel',
            '@babel/plugin-proposal-class-properties',
          ],
        },
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
        loader: 'file-loader',
        exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
        options: {
          name: '/static/[name].[ext]',
        },
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '/static/[name].[ext]',
        },
      }
    ],
  },
  devServer: {
    host: 'localhost',
    port: 4000,
    historyApiFallback: true,
    hot: true,
  },
};