import Helper from '@darkwolf/helper.mjs'
import Duration, { Unit } from '@darkwolf/duration.mjs'
import { InvalidTimestampError } from '../errors/index.mjs'
import Timestamp from './Timestamp.mjs'

export default class UnixTimestamp {
  static now = Helper.unix

  static parse(timestamp) {
    if (Helper.isString(timestamp)) {
      if (/^\d+(?:\.\d+)?$/.test(timestamp)) {
        return parseFloat(timestamp)
      } else {
        const time = Date.parse(timestamp)
        if (Helper.isNaN(time)) {
          throw new InvalidTimestampError(timestamp)
        } else {
          return Duration.floatSeconds(time)
        }
      }
    } else if (Helper.isNumber(timestamp)) {
      return timestamp
    } else if (timestamp instanceof UnixTimestamp) {
      return timestamp.value
    } else if (timestamp instanceof Timestamp || timestamp instanceof Duration) {
      return timestamp.floatSeconds
    } else if (timestamp instanceof Date) {
      return Duration.floatSeconds(timestamp.getTime())
    } else {
      throw new InvalidTimestampError(timestamp)
    }
  }

  static from(value) {
    return new UnixTimestamp(value)
  }

  static fromMilliseconds(milliseconds) {
    return new UnixTimestamp(Duration.floatSeconds(milliseconds))
  }

  static fromMillis(millis) {
    return UnixTimestamp.fromMilliseconds(millis)
  }

  static fromSeconds(seconds) {
    return new UnixTimestamp(seconds)
  }

  constructor(duration, unit) {
    this.set(duration, unit)
  }

  get milliseconds() {
    return Duration.inSeconds(this.value)
  }

  get millis() {
    return this.milliseconds
  }

  get floatSeconds() {
    return this.value
  }

  get seconds() {
    return Math.floor(this.value)
  }

  get [Symbol.toStringTag]() {
    return 'UnixTimestamp'
  }

  setValue(value) {
    return this.setSeconds(Helper.exists(value) ? UnixTimestamp.parse(value) : Helper.unix())
  }

  set(duration, unit) {
    return unit === Unit.MILLISECOND ? this.setMilliseconds(duration) : this.setValue(duration)
  }

  setMilliseconds(milliseconds) {
    return this.setSeconds(Duration.floatSeconds(milliseconds))
  }

  setMillis(millis) {
    return this.setMilliseconds(millis)
  }

  setSeconds(seconds) {
    this.value = seconds
    return this
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
        case Unit.MILLISECOND: {
          return this.addMilliseconds(duration)
        }
      }
    }
    return Helper.isNumber(duration) ? this.addSeconds(duration) : this.addMilliseconds(Duration.parse(duration))
  }

  addMilliseconds(milliseconds) {
    return this.addSeconds(Duration.floatSeconds(milliseconds))
  }

  addMillis(millis) {
    return this.addMilliseconds(millis)
  }

  addSeconds(seconds) {
    this.value += seconds
    return this
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
    return this.addMilliseconds(Duration.inQuarters(quarters))
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
        case Unit.MILLISECOND: {
          return this.subtractMilliseconds(duration)
        }
      }
    }
    return Helper.isNumber(duration) ? this.subtractSeconds(duration) : this.subtractMilliseconds(Duration.parse(duration))
  }

  subtractMilliseconds(milliseconds) {
    return this.subtractSeconds(Duration.floatSeconds(milliseconds))
  }

  subtractMillis(millis) {
    return this.subtractMilliseconds(millis)
  }

  subtractSeconds(seconds) {
    this.value -= seconds
    return this
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
    return new UnixTimestamp(this.value)
  }

  toTimestamp() {
    return new Timestamp(this.milliseconds)
  }

  toDuration() {
    return new Duration(this.milliseconds)
  }

  toDate() {
    return new Date(this.milliseconds)
  }

  toString(options = {}) {
    const date = this.toDate().toISOString()
    return options.millis ? date : date.split('.')[0] + 'Z'
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
