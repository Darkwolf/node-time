const Day = require('./Day')
const Month = require('./Month')

class Year {
  static MONTHS = 12
  static WEEKS = Year.MONTHS * Month.WEEKS
  static DAYS = 365.25
  static HOURS = Year.DAYS * Day.HOURS
  static MINUTES = Year.DAYS * Day.MINUTES
  static SECONDS = Year.DAYS * Day.SECONDS
  static MILLISECONDS = Year.DAYS * Day.MILLISECONDS
  static NAMES = ['y', 'yr', 'yrs', 'year', 'years']
}

module.exports = Year
