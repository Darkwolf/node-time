[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type
[Object]: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object
[Date]: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date
[Duration]: https://github.com/Darkwolf/node-duration/blob/main/docs/API.md
[Duration.Unit]: https://github.com/Darkwolf/node-duration/blob/main/docs/API.md#class-unit
[CustomError]: https://github.com/Darkwolf/node-custom-error/blob/main/docs/API.md

# API
### class: Time
#### `static` Time.Duration
* returns: <[Duration][Duration]>

#### `static` Time.types
* returns: <[Types](#class-types)>

#### `static` Time.Timestamp
* returns: <[Timestamp](#class-timestamp)>

#### `static` Time.UnixTimestamp
* returns: <[UnixTimestamp](#class-unixtimestamp)>

#### `static` Time.errors
* returns: <[Errors](#class-errors)>

#### `static` Time.Error
* returns: <[TimeError](#class-timeerror)>

#### `static` Time.InvalidTimestampError
* returns: <[InvalidTimestampError](#class-invalidtimestamperror)

#### `static` Time.now()
* returns: <[number][number]>

#### `static` Time.unix([options])
* `options` <[Object][Object]>
  * `millis` <?[boolean][boolean]> If `true` will return the current Unix timestamp in seconds with millisecond fraction. Defaults to `false`.
* returns: <[number][number]>

#### `static` Time.ms(duration)
* `duration` <[string][string] | [number][number] | [Duration][Duration]>
* returns: <[number][number]> Milliseconds.

#### `static` Time.sec(duration)
* `duration` <[string][string] | [number][number] | [Duration][Duration]>
* returns: <[number][number]> Seconds.

#### `static` Time.timestamp()
* returns: <[Timestamp](#class-timestamp)>

#### `static` Time.unixTimestamp([options])
* `options` <[Object][Object]>
  * `millis` <?[boolean][boolean]> If `true` will return the current Unix timestamp in seconds with millisecond fraction. Defaults to `false`.
* returns: <[UnixTimestamp](#class-unixtimestamp)>

### class: Types
#### `static` Types.Timestamp
* returns: <[Timestamp](#class-timestamp)>

#### `static` Types.UnixTimestamp
* returns: <[UnixTimestamp](#class-unixtimestamp)>

### class: Timestamp
#### `static` Timestamp.now()
* returns: <[number][number]>

#### `static` Timestamp.parse(timestamp)
* `timestamp` <[string][string] | [number][number] | [Timestamp](#class-timestamp) | [UnixTimestamp](#class-unixtimestamp) | [Duration][Duration] | [Date][Date]>
* returns: <[number][number]>

#### `static` Timestamp.from(value)
* `value` <[string][string] | [number][number] | [Timestamp](#class-timestamp) | [UnixTimestamp](#class-unixtimestamp) | [Duration][Duration] | [Date][Date]>
* returns: <[Timestamp](#class-timestamp)>

#### `static` Timestamp.fromMilliseconds(milliseconds)
* `milliseconds` <[number][number]>
* returns: <[Timestamp](#class-timestamp)

#### `static` Timestamp.fromMillis(millis)
Equivalent to <[Timestamp.fromMilliseconds(milliseconds)](#static-timestampfrommillisecondsmilliseconds)>
* `millis` <[number][number]> Milliseconds.
* returns: <[Timestamp](#class-timestamp)>

#### `static` Timestamp.fromSeconds(seconds)
* `seconds` <[number][number]>
* returns: <[Timestamp](#class-timestamp)>

#### `init` new Timestamp([duration[, unit]])
* `duration` <[string][string] | [number][number] | [Timestamp](#class-timestamp) | [UnixTimestamp](#class-unixtimestamp) | [Duration][Duration] | [Date][Date]> If the value is `undefined` or `null` will return the current timestamp in milliseconds.
* `unit` <[string][string]<[Duration.Unit][Duration.Unit]>> Must be `'second'` or `'millisecond'`.
* returns: <[Timestamp](#class-timestamp)>

#### timestamp.value
* returns: <[number][number]>

#### `get` timestamp.milliseconds
* returns: <[number][number]>

#### `get` timestamp.millis
Equivalent to <[timestamp.milliseconds](#get-timestampmilliseconds)>
* returns: <[number][number]> Milliseconds.

#### `get` timestamp.floatSeconds
* returns: <[number][number]>

#### `get` timestamp.seconds
* returns: <[number][number]>

#### timestamp.setValue([value])
* `value` <[string][string] | [number][number] | [Timestamp](#class-timestamp) | [UnixTimestamp](#class-unixtimestamp) | [Duration][Duration] | [Date][Date]> If the value is `undefined` or `null` will return the current timestamp in milliseconds.
* returns: <[this](#class-timestamp)>

#### timestamp.set(duration[, unit])
* `duration` <[string][string] | [number][number] | [Duration][Duration]>
* `unit` <[string][string]<[Duration.Unit][Duration.Unit]>> Must be `'second'` or `'millisecond'`.
* returns: <[this](#class-timestamp)>

#### timestamp.setMilliseconds(milliseconds)
* `milliseconds` <[number][number]>
* returns: <[this](#class-timestamp)

#### timestamp.setMillis(millis)
Equivalent to <[timestamp.setMilliseconds(milliseconds)](#timestampsetmillisecondsmilliseconds)>
* `millis` <[number][number]> Milliseconds.
* returns: <[this](#class-timestamp)>

#### timestamp.setSeconds(seconds)
* `seconds` <[number][number]>
* returns: <[this](#class-timestamp)>

#### timestamp.add(duration[, unit])
* `duration` <[string][string] | [number][number] | [Duration][Duration]>
* `unit` <[string][string]<[Duration.Unit][Duration.Unit]>>
* returns: <[this](#class-timestamp)>

#### timestamp.addMilliseconds(milliseconds)
* `milliseconds` <[number][number]>
* returns: <[this](#class-timestamp)>

#### timestamp.addMillis(millis)
Equivalent to <[timestamp.addMilliseconds(milliseconds)](#timestampaddmillisecondsmilliseconds)>
* `millis` <[number][number]> Milliseconds.
* returns: <[this](#class-timestamp)>

#### timestamp.addSeconds(seconds)
* `seconds` <[number][number]>
* returns: <[this](#class-timestamp)>

#### timestamp.addMinutes(minutes)
* `minutes` <[number][number]>
* returns: <[this](#class-timestamp)>

#### timestamp.addHours(hours)
* `hours` <[number][number]>
* returns: <[this](#class-timestamp)>

#### timestamp.addDays(days)
* `days` <[number][number]>
* returns: <[this](#class-timestamp)>

#### timestamp.addWeeks(weeks)
* `weeks` <[number][number]>
* returns: <[this](#class-timestamp)>

#### timestamp.addMonths(months)
* `months` <[number][number]>
* returns: <[this](#class-timestamp)>

#### timestamp.addQuarters(quarters)
* `quarters` <[number][number]>
* returns: <[this](#class-timestamp)>

#### timestamp.addYears(years)
* `years` <[number][number]>
* returns: <[this](#class-timestamp)>

#### timestamp.subtract(duration[, unit])
* `duration` <[string][string] | [number][number] | [Duration][Duration]>
* `unit` <[string][string]<[Duration.Unit][Duration.Unit]>>
* returns: <[this](#class-timestamp)>

#### timestamp.subtractMilliseconds(milliseconds)
* `milliseconds` <[number][number]>
* returns: <[this](#class-timestamp)>

#### timestamp.subtractMillis(millis)
Equivalent to <[timestamp.subtractMilliseconds(milliseconds)](#timestampsubtractmillisecondsmilliseconds)>
* `millis` <[number][number]> Milliseconds.
* returns: <[this](#class-timestamp)>

#### timestamp.subtractSeconds(seconds)
* `seconds` <[number][number]>
* returns: <[this](#class-timestamp)>

#### timestamp.subtractMinutes(minutes)
* `minutes` <[number][number]>
* returns: <[this](#class-timestamp)>

#### timestamp.subtractHours(hours)
* `hours` <[number][number]>
* returns: <[this](#class-timestamp)>

#### timestamp.subtractDays(days)
* `days` <[number][number]>
* returns: <[this](#class-timestamp)>

#### timestamp.subtractWeeks(weeks)
* `weeks` <[number][number]>
* returns: <[this](#class-timestamp)>

#### timestamp.subtractMonths(months)
* `months` <[number][number]>
* returns: <[this](#class-timestamp)>

#### timestamp.subtractQuarters(quarters)
* `quarters` <[number][number]>
* returns: <[this](#class-timestamp)>

#### timestamp.subtractYears(years)
* `years` <[number][number]>
* returns: <[this](#class-timestamp)>

#### timestamp.abs()
* returns: <[this](#class-timestamp)>

#### timestamp.ceil()
* returns: <[this](#class-timestamp)>

#### timestamp.floor()
* returns: <[this](#class-timestamp)>

#### timestamp.round()
* returns: <[this](#class-timestamp)>

#### timestamp.reset()
* returns: <[this](#class-timestamp)>

#### timestamp.clone()
* returns: <[Timestamp](#class-timestamp)>

#### timestamp.toUnixTimestamp([options])
* `options` <[Object][Object]>
  * `millis` <?[boolean][boolean]> If `true` will return the Unix timestamp with millisecond fraction.
* returns: <[UnixTimestamp](#class-unixtimestamp)>

#### timestamp.toDuration()
* returns: <[Duration][Duration]>

#### timestamp.toDate()
* returns: <[Date][Date]>

#### timestamp.toString()
* returns: <[string][string]> Date string in ISO 8601 format. E.g., `'2021-01-01T00:00:00Z'`.

#### timestamp.valueOf()
* returns: <[number][number]>

#### timestamp.toJSON()
* returns: <[number][number]>

#### timestamp\[Symbol.toPrimitive](hint)
* `hint` <[string][string]> Must be `'string'`, `'number'` or `'default'`.
* returns: <[string][string] | [number][number]>

### class: UnixTimestamp
#### `static` UnixTimestamp.now([options])
* `options` <[Object][Object]>
  * `millis` <?[boolean][boolean]> If `true` will return the current Unix timestamp in seconds with millisecond fraction. Defaults to `false`.
* returns: <[number][number]>

#### `static` UnixTimestamp.parse(timestamp)
* `timestamp` <[string][string] | [number][number] | [UnixTimestamp](#class-unixtimestamp) | [Timestamp](#class-timestamp) | [Duration][Duration] | [Date][Date]>
* returns: <[number][number]>

#### `static` UnixTimestamp.from(value)
* `value` <[string][string] | [number][number] |
[UnixTimestamp](#class-unixtimestamp) | [Timestamp](#class-timestamp) | [Duration][Duration] | [Date][Date]>
* returns: <[UnixTimestamp](#class-unixtimestamp)>

#### `static` UnixTimestamp.fromMilliseconds(milliseconds)
* `milliseconds` <[number][number]>
* returns: <[UnixTimestamp](#class-unixtimestamp)

#### `static` UnixTimestamp.fromMillis(millis)
Equivalent to <[UnixTimestamp.fromMilliseconds(milliseconds)](#static-unixtimestampfrommillisecondsmilliseconds)>
* `millis` <[number][number]> Milliseconds.
* returns: <[UnixTimestamp](#class-unixtimestamp)>

#### `static` UnixTimestamp.fromSeconds(seconds)
* `seconds` <[number][number]>
* returns: <[UnixTimestamp](#class-unixtimestamp)>

#### `init` new UnixTimestamp([duration[, unit]])
* `duration` <[string][string] | [number][number] | [UnixTimestamp](#class-unixtimestamp) | [Timestamp](#class-timestamp) | [Duration][Duration] | [Date][Date]> If the value is `undefined` or `null` will return the current Unix timestamp in seconds.
* `unit` <[string][string]<[Duration.Unit][Duration.Unit]>> Must be `'second'` or `'millisecond'`.
* returns: <[UnixTimestamp](#class-unixtimestamp)>

#### unixTimestamp.value
* returns: <[number][number]>

#### `get` unixTimestamp.milliseconds
* returns: <[number][number]>

#### `get` unixTimestamp.millis
Equivalent to <[unixTimestamp.milliseconds](#get-unixtimestampmilliseconds)>
* returns: <[number][number]> Milliseconds.

#### `get` unixTimestamp.floatSeconds
* returns: <[number][number]>

#### `get` unixTimestamp.seconds
* returns: <[number][number]>

#### unixTimestamp.setValue([value])
* `value` <[string][string] | [number][number] | [UnixTimestamp](#class-unixtimestamp) | [Timestamp](#class-timestamp) | [Duration][Duration] | [Date][Date]> If the value is `undefined` or `null` will return the current Unix timestamp in seconds.
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.set(duration[, unit])
* `duration` <[string][string] | [number][number] | [UnixTimestamp](#class-unixtimestamp) | [Timestamp](#class-timestamp) | [Duration][Duration] | [Date][Date]> If the value is `undefined` or `null` will return the current Unix timestamp in seconds.
* `unit` <[string][string]<[Duration.Unit][Duration.Unit]>> Must be `'second'` or `'millisecond'`.
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.setMilliseconds(milliseconds)
* `milliseconds` <[number][number]>
* returns: <[this](#class-unixtimestamp)

#### unixTimestamp.setMillis(millis)
Equivalent to <[unixTimestamp.setMilliseconds(milliseconds)](#unixtimestampsetmillisecondsmilliseconds)>
* `millis` <[number][number]> Milliseconds.
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.setSeconds(seconds)
* `seconds` <[number][number]>
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.add(duration[, unit])
* `duration` <[string][string] | [number][number] | [Duration][Duration]>
* `unit` <[string][string]<[Duration.Unit][Duration.Unit]>>
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.addMilliseconds(milliseconds)
* `milliseconds` <[number][number]>
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.addMillis(millis)
Equivalent to <[unixTimestamp.addMilliseconds(milliseconds)](#unixtimestampaddmillisecondsmilliseconds)>
* `millis` <[number][number]> Milliseconds.
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.addSeconds(seconds)
* `seconds` <[number][number]>
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.addMinutes(minutes)
* `minutes` <[number][number]>
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.addHours(hours)
* `hours` <[number][number]>
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.addDays(days)
* `days` <[number][number]>
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.addWeeks(weeks)
* `weeks` <[number][number]>
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.addMonths(months)
* `months` <[number][number]>
* returns: <[this](#class-unixtimestamp)>

#### unixTimestampimestamp.addQuarters(quarters)
* `quarters` <[number][number]>
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.addYears(years)
* `years` <[number][number]>
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.subtract(duration[, unit])
* `duration` <[string][string] | [number][number] | [Duration][Duration]>
* `unit` <[string][string]<[Duration.Unit][Duration.Unit]>>
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.subtractMilliseconds(milliseconds)
* `milliseconds` <[number][number]>
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.subtractMillis(millis)
Equivalent to <[unixTimestamp.subtractMilliseconds(milliseconds)](#unixtimestampsubtractmillisecondsmilliseconds)>
* `millis` <[number][number]> Milliseconds.
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.subtractSeconds(seconds)
* `seconds` <[number][number]>
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.subtractMinutes(minutes)
* `minutes` <[number][number]>
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.subtractHours(hours)
* `hours` <[number][number]>
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.subtractDays(days)
* `days` <[number][number]>
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.subtractWeeks(weeks)
* `weeks` <[number][number]>
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.subtractMonths(months)
* `months` <[number][number]>
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.subtractQuarters(quarters)
* `quarters` <[number][number]>
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.subtractYears(years)
* `years` <[number][number]>
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.abs()
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.ceil()
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.floor()
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.round()
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.reset()
* returns: <[this](#class-unixtimestamp)>

#### unixTimestamp.clone()
* returns: <[UnixTimestamp](#class-unixtimestamp)>

#### unixTimestamp.toTimestamp()
* returns: <[Timestamp](#class-timestamp)>

#### unixTimestamp.toDuration()
* returns: <[Duration][Duration]>

#### unixTimestamp.toDate()
* returns: <[Date][Date]>

#### unixTimestamp.toString([options])
* `options` <[Object][Object]>
  * `millis` <?[boolean][boolean]> If `true` will return date string with millisecond fraction. E.g., `'2021-01-01T00:00:00.000Z'`. Defaults to `false`.
* returns: <[string][string]> Date string in ISO 8601 format. E.g., `'2021-01-01T00:00:00Z'`.

#### unixTimestamp.valueOf()
* returns: <[number][number]>

#### unixTimestamp.toJSON()
* returns: <[number][number]>

#### unixTimestamp\[Symbol.toPrimitive](hint)
* `hint` <[string][string]> Must be `'string'`, `'number'` or `'default'`.
* returns: <[string][string] | [number][number]>

### class: Errors
#### `static` Errors.Error
* returns: <[TimeError](#class-timeerror)>

#### `static` Errors.InvalidTimestampError
* returns: <[InvalidTimestampError](#class-invalidtimestamperror)>

### class: TimeError
* extends: <[CustomError][CustomError]>

#### `static` TimeError.name
* returns: <[string][string]> Defaults to `'TimeError'`.

### class: InvalidTimestampError
* extends: <[TimeError](#class-timeerror)>

#### `static` InvalidTimestampError.name
* returns: <[string][string]> Defaults to `'InvalidTimestampError'`.

#### `static` InvalidTimestampError.code
* returns: <[string][string]> Defaults to `'invalid-timestamp'`.
