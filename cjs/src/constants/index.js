const Millisecond = require('./Millisecond')
const Second = require('./Second')
const Minute = require('./Minute')
const Hour = require('./Hour')
const Day = require('./Day')
const Week = require('./Week')
const Month = require('./Month')
const Year = require('./Year')

class Constants {
  static TIME_PATTERN = `((-?\\d{0,})(\\.\\d{1,})?)[_\\s]?(${
    [
      Millisecond.NAMES,
      Second.NAMES,
      Minute.NAMES,
      Hour.NAMES,
      Day.NAMES,
      Week.NAMES,
      Month.NAMES,
      Year.NAMES
    ].reduce((allNames, names) => [
      ...allNames,
      `(${names.map(o => `${o}\\b`).join('|')})`
    ], []).join('|')
  })`
  static Millisecond = Millisecond
  static Second = Second
  static Minute = Minute
  static Hour = Hour
  static Day = Day
  static Week = Week
  static Month = Month
  static Year = Year
}

module.exports = Constants
