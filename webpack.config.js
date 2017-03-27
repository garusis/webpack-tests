"use strict"
const path = require("path")

const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const metadata = require("./webpack/commonConfig")
const libsExtractor = new ExtractTextPlugin("assets/css/libs.css")
const modulesExtractor = new ExtractTextPlugin("assets/css/modules.css")

module.exports = {
  entry: {
    app: ["./src/app/bootstrap.js"]
  },
  output: {
    path: path.join(process.cwd(), "dist"),
    filename: "assets/js/app.js"
  },
  watch: !metadata.object.productionMode,
  plugins: [
    libsExtractor,
    modulesExtractor,
    new HtmlWebpackPlugin({
      template: "src/index.ejs",
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
        use: [
          "eslint-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: libsExtractor.extract(["css-loader", "autoprefix-loader"])
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: modulesExtractor.extract(["css-loader", "autoprefix-loader", "less-loader"])
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  }
}

new webpack.DefinePlugin({
  "metadata": metadata.stringify
})
