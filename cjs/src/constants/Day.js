const Hour = require('./Hour')

class Day {
  static HOURS = 24
  static MINUTES = Day.HOURS * Hour.MINUTES
  static SECONDS = Day.HOURS * Hour.SECONDS
  static MILLISECONDS = Day.HOURS * Hour.MILLISECONDS
  static NAMES = ['d', 'day', 'days']
}

module.exports = Day
