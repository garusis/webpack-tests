/**
 * Created by garusis on 26/03/17.
 */
const devConfig = require("./webpack.config")

const stripLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: "strip-loader?strip[]=debug"
}

devConfig.module.loaders.push(stripLoader)

module.exports = devConfig
