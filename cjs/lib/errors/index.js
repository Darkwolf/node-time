const Error = require('./Error')
const InvalidTimestampError = require('./InvalidTimestampError')

class Errors {}
Errors.Error = Error
Errors.InvalidTimestampError = InvalidTimestampError

module.exports = Errors
