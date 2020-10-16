import CustomError from '@darkwolf/custom-error.mjs'

export default class TimeError extends CustomError {
  static name = 'TimeError'

  constructor(message, code) {
    super(message, code)
    this.setName(TimeError.name)
  }
}
