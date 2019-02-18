const { join } = require('path')
const { readFileSync } = require('fs')
const { safeLoad } = require('js-yaml')
const { test } = require('tap')
const parser = require('..')

const yaml = readFileSync(join(__dirname, '2.0', 'fixtures', '.colophon.yml'), 'utf8')

test('valid colophon file', assert => {
  assert.plan(1)

  const data = safeLoad(yaml)

  assert.resolveMatch(parser(data), { version: 2.0, id: 'awesome-app' })
})

test('invalid colophon file', assert => {
  assert.plan(1)

  assert.rejects(parser(null), {})
})

test('provides schema errors', assert => {
  assert.plan(1)

  const colophon = `
  version: 2.0

  id: my-app

  about:
    title: my app
    description: my app description
  `

  assert.rejects(parser(colophon), { errors: [ { message: "should have required property 'contacts'" } ] })
})
