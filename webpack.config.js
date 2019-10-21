
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  entry: {
    main: path.join(__dirname, 'src/js', 'index')
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'script.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    compress: true,
    port: 8080,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            '@babel/preset-env',
          ]
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: true
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true
    })
  ]
}