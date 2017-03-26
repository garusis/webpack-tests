"use strict"
/**
 * Created by garusis on 26/03/17.
 */
const WebpackDevServer = require("webpack-dev-server")
const webpack = require("webpack")
const path = require("path")
const metadata = require("./webpack/commonConfig").object
const webpackConfig = require("./webpack.config")

webpackConfig.entry.app.unshift(`webpack-dev-server/client?http://127.0.0.1:${metadata.DEV_PORT}/`)

const compiler = webpack(webpackConfig)
const server = new WebpackDevServer(compiler, {
  contentBase: path.join(process.cwd(), "dist"),
  historyApiFallback: true,
  compress: true,
  clientLogLevel: "info",
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
});
server.listen(metadata.PORT, function () {
  console.log(`Server listening at ${metadata.PORT}`)
});
module.exports = server