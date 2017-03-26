"use strict"
/**
 * Created by garusis on 25/03/17.
 */
const ENV = process.env
const metadata = {
  PORT: 3000,
  NODE_ENV: "development",
  APP_ENV: "development"
}
const stringify = {}

for (let key in ENV) {
  metadata[key] = ENV[key]
}

for (let key in metadata) {
  stringify[key] = JSON.stringify(metadata[key])
}

module.exports = {object: metadata, stringify}
