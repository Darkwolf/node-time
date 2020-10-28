# Time
## Install
#### ECMAScript (Node.js v12.x LTS or higher)
`npm i --save @darkwolf/time.mjs`
#### CommonJS (Node.js v10.x LTS or higher)
`npm i --save @darkwolf/time.cjs`
## Using
```javascript
// ECMAScript
import Time, { Timestamp, UnixTimestamp } from '@darkwolf/time.mjs'

// CommonJS
const Time = require('@darkwolf/time.cjs')
const { Timestamp, UnixTimestamp } = Time

Time.ms('23h 59min 59sec') // => 86399000
Time.sec('-23h 59min 59sec') // => -86399
Time.now() // => Current timestamp in milliseconds: 2147483000647
Time.unix() // => Current Unix timestamp in seconds: 2147483000
Time.unix({millis: true}) // => Current Unix timestamp in seconds with millisecond fraction: 2147483000.647
const timestamp = Time.timestamp()
timestamp.value // => Current timestamp in milliseconds: 2147483000647
const unixTimestamp = Time.unixTimestamp()
unixTimestamp.value // => Current Unix timestamp in seconds: 2147483000
const date = new Date('2021-01-01')
const unix = new UnixTimestamp(date).add('23h 59min 59sec')
unix.toString() // => '2021-01-01T23:59:59Z'
unix
  .add('1 сек')
  .subtract('.5 дня')
unix.toString() // => '2021-01-01T12:00:00Z'
const other = unix
  .clone()
  .add('12 часов')
other.toString() // => '2021-01-02T00:00:00Z'
const diff = other - unix // => 43200
```
## [API Documentation](https://github.com/Darkwolf/node-time/blob/master/docs/API.md)
## Contact Me
#### GitHub: [@PavelWolfDark](https://github.com/PavelWolfDark)
#### Telegram: [@PavelWolfDark](https://t.me/PavelWolfDark)
#### Email: [PavelWolfDark@gmail.com](mailto:PavelWolfDark@gmail.com)
