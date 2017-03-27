/**
 * Created by garusis on 26/03/17.
 */
const devConfig = require("./webpack.config")

const stripLoader = "strip-loader?strip[]=debug,strip[]=console.log"

devConfig.module.rules[0].use.push(stripLoader)

module.exports = devConfig
