const available = [
  '1.0',
  '1.1'
]

for (const version of available) {
  exports[version] = {
    schema: require(`./schema/${version}/schema.json`),
    regex: require(`./schema/${version}/regex`)
  }
}
