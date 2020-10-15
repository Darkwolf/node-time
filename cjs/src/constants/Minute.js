const Second = require('./Second')

class Minute {
  static SECONDS = 60
  static MILLISECONDS = Minute.SECONDS * Second.MILLISECONDS
  static NAMES = ['m', 'min', 'mins', 'minute', 'minutes']
}

module.exports = Minute
