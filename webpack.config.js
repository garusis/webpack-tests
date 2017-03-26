const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log("&&&&&&&&&&&&&&&&&&&&&&")
console.log(process.env.NODE_ENV)
console.log("&&&&&&&&&&&&&&&&&&&&&&")

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(process.cwd(), "dist"),
    filename: "assets/app.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.ejs'
    })
  ]
}