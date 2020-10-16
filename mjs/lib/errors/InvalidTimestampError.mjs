import Error from './Error.mjs'

export default class InvalidTimestampError extends Error {
  static name = 'InvalidTimestampError'
  static code = 'invalid-timestamp'

  constructor(value) {
    super(`Invalid timestamp: '${value}'.`, InvalidTimestampError.code)
    this.setName(InvalidTimestampError.name)
  }
}
