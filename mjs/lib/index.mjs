import types, {
  Timestamp,
  UnixTimestamp
} from './types/index.mjs'
import errors, {
  Error,
  InvalidTimestampError
} from './errors/index.mjs'

export {
  types,
  Timestamp,
  UnixTimestamp,
  errors,
  Error,
  InvalidTimestampError
}

export default class Time {
  static types = types
  static Timestamp = Timestamp
  static UnixTimestamp = UnixTimestamp
  static errors = errors
  static Error = Error
  static InvalidTimestampError = InvalidTimestampError

  static now() {
    return Date.now()
  }

  static unix(options) {
    return UnixTimestamp.now(options)
  }

  static timestamp() {
    return new Timestamp()
  }

  static unixTimestamp(options) {
    return new UnixTimestamp(UnixTimestamp.now(options))
  }
}
