const webpack = require('webpack');
const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './client/src/index.js',
    'eventsource-polyfill'
  ],
  output : {
    path: path.resolve(__dirname,'./client/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './client/dist',
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        loader: ['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.(jpg|gif|jpeg|png|svg)$/,
        loader: ['file-loader']
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ],
  
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackplugin({
      template: './client/src/index.html',
      inject: 'body',
    }),
  ]
};