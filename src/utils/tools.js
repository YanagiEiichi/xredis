'use strict'
const debug = require('util').debuglog('xredis')
const Resper = require('resper')

let resper = new Resper()
let jobsQue = []

resper.on('data', function (result) {
  debug('Get data: %j', result)

  jobsQue.shift().resolve(result)
})

resper.on('error', function (error) {
  debug('Get error: %j', error)

  if (jobsQue.length === 0) return
  jobsQue.shift().reject(error)
})

function request (client, req) {
  return new Promise((resolve, reject) => {
    jobsQue.push({resolve, reject})

    client.write(req)
  })
}

async function callMethod (client, method = '', ...params) {
  if (!Array.isArray(params)) throw new Error('params should be an array')
  debug('Get method array: %j', [method, ...params])

  let encodedReq = Resper.encodeRequestArray([method, ...params])
  return await request(client, encodedReq)
}

module.exports = {
  resper,
  request,
  callMethod
}
