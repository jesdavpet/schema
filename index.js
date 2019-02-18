const { safeLoad } = require('js-yaml')
const Ajv = require('ajv')
const ColophonError = require('./error')

const { latest: { schema } } = require('./versions')

// force async
schema['$async'] = true

const ajv = new Ajv({ allErrors: true })

const validate = ajv.compile(schema)

module.exports = function parser (data) {
  // attempt to read yaml
  if (typeof data === 'string') {
    try {
      data = safeLoad(data)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  // validate
  return validate(data)
    .then(data)
    .catch(error => {
      // something else went wrong
      /* istanbul ignore if */
      if (!(error instanceof Ajv.ValidationError)) throw error

      // identifiable error class
      throw new ColophonError(error.errors)
    })
}
