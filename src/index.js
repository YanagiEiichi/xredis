'use strict'
const EventEmitter = require('events')
const {createConnection} = require('net')
const debug = require('util').debuglog('xredis')
const Resper = require('resper')
const {request} = require('./utils/tools')

class XRedis extends EventEmitter {
  constructor ({
    host = '127.0.0.1',
    port = 6379
  } = {}) {
    super()
    this.client = createConnection({host, port})
  }

  async callMethod (method = '', params = []) {
    if (!Array.isArray(params)) throw new Error('params should be an array')
    debug('Method array: %j', [method, ...params])
    let encodedReq = Resper.encodeRequestArray([method, ...params])

    let resBuffer = await request(this.client, encodedReq)
    return Resper.decode(resBuffer)[0]
  }
}

module.exports = XRedis
