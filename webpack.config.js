var debug = process.argv.indexOf('-p') === -1
var webpack = require('webpack')

module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : false,
  entry: {
    header: './src/Lightbox.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['env', {
              targets: {
                browsers: ['last 3 major versions', 'IE >= 11']
              }
            }], 'react'],
            plugins: ['transform-decorators-legacy', 'transform-class-properties']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: __dirname + '/lib',
    filename: '[name].js'
  }
}
