const Day = require('./Day')

class Week {
  static DAYS = 7
  static HOURS = Week.DAYS * Day.HOURS
  static MINUTES = Week.DAYS * Day.MINUTES
  static SECONDS = Week.DAYS * Day.SECONDS
  static MILLISECONDS = Week.DAYS * Day.MILLISECONDS
  static NAMES = ['w', 'wk', 'wks', 'week', 'weeks']
}

module.exports = Week
