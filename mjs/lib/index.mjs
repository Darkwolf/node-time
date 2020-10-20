import Helper from '@darkwolf/helper.mjs'
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
  static now = Helper.now
  static unix = Helper.unix
  static types = types
  static Timestamp = Timestamp
  static UnixTimestamp = UnixTimestamp
  static errors = errors
  static Error = Error
  static InvalidTimestampError = InvalidTimestampError

  static timestamp() {
    return new Timestamp()
  }

  static unixTimestamp(options) {
    return new UnixTimestamp(Helper.unix(options))
  }
}
