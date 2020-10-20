const Helper = require('@darkwolf/helper.cjs')
const types = require('./types')
const errors = require('./errors')
const {
  Timestamp,
  UnixTimestamp
} = types
const {
  Error,
  InvalidTimestampError
} = errors

class Time {}
Time.now = Helper.now
Time.unix = Helper.unix
Time.timestamp = () => new Timestamp()
Time.unixTimestamp = options => new UnixTimestamp(Helper.unix(options))
Time.types = types
Time.Timestamp = Timestamp
Time.UnixTimestamp = UnixTimestamp
Time.errors = errors
Time.Error = Error
Time.InvalidTimestampError = InvalidTimestampError

module.exports = Time
