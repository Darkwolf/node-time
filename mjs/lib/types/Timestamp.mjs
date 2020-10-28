import Helper from '@darkwolf/helper.mjs'
import Duration, { Unit } from '@darkwolf/duration.mjs'
import { InvalidTimestampError } from '../errors/index.mjs'
import UnixTimestamp from './UnixTimestamp.mjs'

export default class Timestamp {
  static now = Helper.now

  static parse(timestamp) {
    if (Helper.isString(timestamp)) {
      if (/^\d+$/.test(timestamp)) {
        return parseFloat(timestamp)
      } else {
        const time = Date.parse(timestamp)
        if (Helper.isNaN(time)) {
          throw new InvalidTimestampError(timestamp)
        } else {
          return time
        }
      }
    } else if (Helper.isNumber(timestamp)) {
      return timestamp
    } else if (timestamp instanceof Timestamp || timestamp instanceof Duration) {
      return timestamp.value
    } else if (timestamp instanceof UnixTimestamp) {
      return timestamp.milliseconds
    } else if (timestamp instanceof Date) {
      return timestamp.getTime()
    } else {
      throw new InvalidTimestampError(timestamp)
    }
  }

  static from(value) {
    return new Timestamp(value)
  }

  static fromMilliseconds(milliseconds) {
    return new Timestamp(milliseconds)
  }

  static fromMillis(millis) {
    return Timestamp.fromMilliseconds(millis)
  }

  static fromSeconds(seconds) {
    return new Timestamp(Duration.inSeconds(seconds))
  }

  constructor(duration, unit) {
    this.set(duration, unit)
  }

  get milliseconds() {
    return this.value
  }

  get millis() {
    return this.value
  }

  get floatSeconds() {
    return Duration.floatSeconds(this.value)
  }

  get seconds() {
    return Duration.seconds(this.value)
  }

  get [Symbol.toStringTag]() {
    return 'Timestamp'
  }

  setValue(value) {
    return this.setMilliseconds(Helper.exists(value) ? Timestamp.parse(value) : Date.now())
  }

  set(duration, unit) {
    return unit === Unit.SECOND ? this.setSeconds(duration) : this.setValue(duration)
  }

  setMilliseconds(milliseconds) {
    this.value = milliseconds
    return this
  }

  setMillis(millis) {
    return this.setMilliseconds(millis)
  }

  setSeconds(seconds) {
    return this.setMilliseconds(Duration.inSeconds(seconds))
  }

  add(duration, unit) {
    if (unit) {
      switch (unit) {
        case Unit.YEAR: {
          return this.addYears(duration)
        }
        case Unit.QUARTER: {
          return this.addQuarters(duration)
        }
        case Unit.MONTH: {
          return this.addMonths(duration)
        }
        case Unit.WEEK: {
          return this.addWeeks(duration)
        }
        case Unit.DAY: {
          return this.addDays(duration)
        }
        case Unit.HOUR: {
          return this.addHours(duration)
        }
        case Unit.MINUTE: {
          return this.addMinutes(duration)
        }
        case Unit.SECOND: {
          return this.addSeconds(duration)
        }
      }
    }
    return this.addMilliseconds(Duration.parse(duration))
  }

  addMilliseconds(milliseconds) {
    this.value += milliseconds
    return this
  }

  addMillis(millis) {
    return this.addMilliseconds(millis)
  }

  addSeconds(seconds) {
    return this.addMilliseconds(Duration.inSeconds(seconds))
  }

  addMinutes(minutes) {
    return this.addMilliseconds(Duration.inMinutes(minutes))
  }

  addHours(hours) {
    return this.addMilliseconds(Duration.inHours(hours))
  }

  addDays(days) {
    return this.addMilliseconds(Duration.inDays(days))
  }

  addWeeks(weeks) {
    return this.addMilliseconds(Duration.inWeeks(weeks))
  }

  addMonths(months) {
    return this.addMilliseconds(Duration.inMonths(months))
  }

  addQuarters(quarters) {
    return this.addQuarters(Duration.inQuarters(quarters))
  }

  addYears(years) {
    return this.addMilliseconds(Duration.inYears(years))
  }

  subtract(duration, unit) {
    if (unit) {
      switch (unit) {
        case Unit.YEAR: {
          return this.subtractYears(duration)
        }
        case Unit.QUARTER: {
          return this.subtractQuarters(duration)
        }
        case Unit.MONTH: {
          return this.subtractMonths(duration)
        }
        case Unit.WEEK: {
          return this.subtractWeeks(duration)
        }
        case Unit.DAY: {
          return this.subtractDays(duration)
        }
        case Unit.HOUR: {
          return this.subtractHours(duration)
        }
        case Unit.MINUTE: {
          return this.subtractMinutes(duration)
        }
        case Unit.SECOND: {
          return this.subtractSeconds(duration)
        }
      }
    }
    return this.subtractMilliseconds(Duration.parse(duration))
  }

  subtractMilliseconds(milliseconds) {
    this.value -= milliseconds
    return this
  }

  subtractMillis(millis) {
    return this.subtractMilliseconds(millis)
  }

  subtractSeconds(seconds) {
    return this.subtractMilliseconds(Duration.inSeconds(seconds))
  }

  subtractMinutes(minutes) {
    return this.subtractMilliseconds(Duration.inMinutes(minutes))
  }

  subtractHours(hours) {
    return this.subtractMilliseconds(Duration.inHours(hours))
  }

  subtractDays(days) {
    return this.subtractMilliseconds(Duration.inDays(days))
  }

  subtractWeeks(weeks) {
    return this.subtractMilliseconds(Duration.inWeeks(weeks))
  }

  subtractMonths(months) {
    return this.subtractMilliseconds(Duration.inMonths(months))
  }

  subtractQuarters(quarters) {
    return this.subtractMilliseconds(Duration.inQuarters(quarters))
  }

  subtractYears(years) {
    return this.subtractMilliseconds(Duration.inYears(years))
  }

  abs() {
    this.value = Math.abs(this.value)
    return this
  }

  ceil() {
    this.value = Math.ceil(this.value)
    return this
  }

  floor() {
    this.value = Math.floor(this.value)
    return this
  }

  round() {
    this.value = Math.round(this.value)
    return this
  }

  reset() {
    return this.setValue(0)
  }

  clone() {
    return new Timestamp(this.value)
  }

  toUnixTimestamp(options = {}) {
    return new UnixTimestamp(options.millis ? this.floatSeconds : this.seconds)
  }

  toDuration() {
    return new Duration(this.value)
  }

  toDate() {
    return new Date(this.value)
  }

  toString() {
    return this.toDate().toISOString()
  }

  valueOf() {
    return this.value
  }

  toJSON() {
    return this.value
  }

  [Symbol.toPrimitive](hint) {
    return hint === 'string' ? this.toString() : this.valueOf()
  }
}
