const Day = require('./Day')

class Month {
  static WEEKS = 4
  static DAYS = 30
  static HOURS = Month.DAYS * Day.HOURS
  static MINUTES = Month.DAYS * Day.MINUTES
  static SECONDS = Month.DAYS * Day.SECONDS
  static MILLISECONDS = Month.DAYS * Day.MILLISECONDS
  static NAMES = ['mo', 'mnth', 'mnths', 'month', 'months']
}

module.exports = Month
