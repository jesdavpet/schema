function ColophonError (errors) {
  var message = 'validation failed'

  this.name = 'ColophonError'
  this.message = message
  this.errors = errors

  /* istanbul ignore else */
  if (typeof Error.captureStackTrace === 'function') {
    Error.captureStackTrace(this, this.constructor)
  } else {
    this.stack = (new Error(message)).stack
  }
}

ColophonError.prototype = Error.prototype

module.exports = ColophonError
