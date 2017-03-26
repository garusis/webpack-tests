/**
 * Created by garusis on 25/03/17.
 */
const ENV = process.env
const metadata = {
  PORT: 3000
}

for (let key in ENV) {
  metadata[key] = JSON.stringify(ENV[key])
}

module.exports = metadata
