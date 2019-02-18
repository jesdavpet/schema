const { join } = require('path')
const { readdirSync } = require('fs')

const path = join(__dirname, 'schema')
const versions = readdirSync(path)

// sort
versions.sort()

for (const version of versions) {
  exports[version] = {
    schema: require(join(path, version, 'schema.json')),
    regex: require(join(path, version, 'regex'))
  }
}

// alias for altest
exports.latest = exports[versions[versions.length - 1]]
