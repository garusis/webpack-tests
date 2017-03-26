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
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      env: metadata.object
    })
  ],
  devServer: {inline: true}
}

new webpack.DefinePlugin({
  'metadata': metadata.stringify
})