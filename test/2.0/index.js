const { join } = require('path')
const { readFileSync } = require('fs')
const { safeLoad } = require('js-yaml')
const { test } = require('tap')
const Ajv = require('ajv')

const schema = require('../../schema/2.0/schema.json')

const yaml = readFileSync(join(__dirname, 'fixtures', '.colophon.yml'), 'utf8')

const ajv = new Ajv()

test('schema compiles successfully', assert => {
  assert.plan(2)

  assert.doesNotThrow(() => ajv.addSchema(schema))
  assert.type(ajv.compile(schema), 'function')
})

test('valid colophon file', assert => {
  assert.plan(1)

  const data = safeLoad(yaml)

  const validate = ajv.compile(schema)
  const valid = validate(data)

  assert.ok(valid)
})
