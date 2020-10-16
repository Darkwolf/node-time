import Error from './Error.mjs'
import InvalidTimestampError from './InvalidTimestampError.mjs'

export {
  Error,
  InvalidTimestampError
}

export default class Errors {
  static Error = Error
  static InvalidTimestampError = InvalidTimestampError
}
