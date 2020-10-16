const CustomError = require('@darkwolf/custom-error.cjs')

class TimeError extends CustomError {
  constructor(message, code) {
    super(message, code)
    this.setName(TimeError.name)
  }
}
TimeError.name = 'TimeError'

module.exports = TimeError
