"use strict"
/**
 * Created by garusis on 25/03/17.
 */
const yargs = require("yargs")
const _ = require("lodash")

yargs.alias('p', 'productionMode')

const argv = yargs.argv
const ENV = process.env
const defaults = {
  PORT: 3000,
  NODE_ENV: "development",
  APP_ENV: "development"
}

const metadata = _.defaults({}, argv, ENV, defaults)

const stringify = {}

for (let key in metadata) {
  stringify[key] = JSON.stringify(metadata[key])
}

module.exports = {object: metadata, stringify}
