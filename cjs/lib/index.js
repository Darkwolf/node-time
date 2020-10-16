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
Time.now = () => Date.now()
Time.unix = options => UnixTimestamp.now(options)
Time.timestamp = () => new Timestamp()
Time.unixTimestamp = options => new UnixTimestamp(UnixTimestamp.now(options))
Time.types = types
Time.Timestamp = Timestamp
Time.UnixTimestamp = UnixTimestamp
Time.errors = errors
Time.Error = Error
Time.InvalidTimestampError = InvalidTimestampError

module.exports = Time
