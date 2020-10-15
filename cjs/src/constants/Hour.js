const Minute = require('./Minute')

class Hour {
  static MINUTES = 60
  static SECONDS = Hour.MINUTES * Minute.SECONDS
  static MILLISECONDS = Hour.MINUTES * Minute.MILLISECONDS
  static NAMES = ['h', 'hr', 'hrs', 'hour', 'hours']
}

module.exports = Hour
