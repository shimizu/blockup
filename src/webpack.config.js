const path = require('path')
const webpack = require('webpack')

const pre =require.resolve('babel-preset-env')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [pre],
            plugins: [
              require.resolve('babel-plugin-transform-object-rest-spread'),
              require.resolve('babel-plugin-transform-react-jsx')
            ]
          }
        }
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  resolveLoader: {
    modules: [path.resolve(__dirname, '../node_modules')]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ]
}
