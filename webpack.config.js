const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '/public/js');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      `${APP_DIR}/index.js`
    ],
    output: {
      path: __dirname,
      filename: 'bundle.js',
      publicPath: '/'
    },
    plugins: [
      new webpack.ProvidePlugin({
      Promise: 'imports-loader?this=>global!exports-loader?global.Promise!es6-promise',
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
      }),
      new webpack.HotModuleReplacementPlugin()],
    module: {
      rules: [
        {
          test: /\.js|\.jsx?$/,
          exclude: /(node_modules)/,
          use: [
                 {
                  loader: 'babel-loader'
                 }
               ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
                {
                  loader: 'url-loader?name=images/[name].[ext]'
                }
                ]
        },
        {
          test: /\.css$/,
          use: [
                'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    modules: true
                  }
                },
                'postcss-loader'
              ]
        }
            ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
};
