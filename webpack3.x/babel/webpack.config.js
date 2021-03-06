module.exports = {
  entry: {
    app: './src/app',
  },

  output: {
    path: __dirname + '/dist',
    filename: '[name].[hash:5].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: __dirname + '/node_modules/',
        use: 'babel-loader',
      }
    ]
  }
}
