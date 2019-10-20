module.exports = {
  entry: ['babel-polyfill', './src/js/index.js'],
  output: {
    path: __dirname + '/dist/js',
    filename: 'script.js',
  },
  devServer: {
    contentBase: './dist'
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
  }
}