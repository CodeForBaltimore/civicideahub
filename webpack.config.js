const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/dev-server',
       APP_DIR + '/index.js'
    ],
    output: {
      path: BUILD_DIR,
      filename: 'bundle.js',
      publicPath: '/static'
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    module: {
      rules: [
        {
          test: /\.js|\.jsx?$/,
          exclude: /(node_modules)/,
          use: [
                 {
                  loader: 'react-hot-loader'
                 },
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
                }
              ]
        }
            ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
}
