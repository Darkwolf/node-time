import Helper from '@darkwolf/helper.mjs'
import Duration from '@darkwolf/duration.mjs'
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
  static Duration = Duration
  static now = Helper.now
  static unix = Helper.unix
  static ms = Duration.ms
  static sec = Duration.sec
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
