const versions = require('../versions')

const { test } = require('tap')

const available = [
  '1.0',
  '1.1'
]

test('exports all versions', assert => {
  assert.plan(3 * available.length)

  for (const number of available) {
    const version = versions[number]
    assert.true(version.hasOwnProperty('schema'))
    assert.type(version.schema, Object)
    assert.type(version.regex, RegExp)
  }
})
