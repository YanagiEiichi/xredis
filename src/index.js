'use strict'
const EventEmitter = require('events')
const {createConnection} = require('net')
const {callMethod, resper} = require('./utils/tools')
const cmds = require('./cmds')

class XRedis extends EventEmitter {
  constructor ({
    host = '127.0.0.1',
    port = 6379
  } = {}) {
    super()

    let client = createConnection({host, port})
    client.unref()
    client.pipe(resper)

    for (let cmd of cmds) {
      this[cmd] = callMethod.bind(this, client, cmd)
    }

    this.client = client
  }
}

module.exports = XRedis
