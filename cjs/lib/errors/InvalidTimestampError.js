const Error = require('./Error')

class InvalidTimestampError extends Error {
  constructor(value) {
    super(`Invalid timestamp: '${value}'.`, InvalidTimestampError.code)
    this.setName(InvalidTimestampError.name)
  }
}
InvalidTimestampError.name = 'InvalidTimestampError'
InvalidTimestampError.code = 'invalid-timestamp'

module.exports = InvalidTimestampError
