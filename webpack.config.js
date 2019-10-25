const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';

const config = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist')
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new HtmlWebpackPlugin({
      favicon: './favicon.ico',
      filename: './index.html',
      template: './index.html',
      inject: true,
      hash: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.less$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.(ico|png|jpg|jpeg|mp4|gif|mov)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        }],
      },
      { test: /\.(obj|glb|eot|woff|woff2|svg|ttf|otf)$/, use: 'file-loader' },
      {
        test: /\.js$/,
        exclude: [/node_module/, /third-party/, /\.json$/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0'],
          },
        }],
      },
    ]
  }
}
if(isDev){
  config.devtool = '#cheap-module-eval-source-map'
  config.devServer = {
    port: 8080,
    host: '127.0.0.1',
    overlay: {
        errors: true
    },
    open: true
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
}
module.exports = config;
