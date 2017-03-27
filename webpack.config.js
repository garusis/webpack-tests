"use strict"
const path = require("path")

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const metadata = require("./webpack/commonConfig")

module.exports = {
  entry: {
    app: ["./src/app.js"]
  },
  output: {
    path: path.join(process.cwd(), "dist"),
    filename: "assets/app.js"
  },
  watch: !metadata.object.productionMode,
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      env: metadata.object
    })
  ],
  devServer: {inline: true},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: "pre",
        use:[
          "eslint-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.es6']
  }
}

new webpack.DefinePlugin({
  'metadata': metadata.stringify
})
