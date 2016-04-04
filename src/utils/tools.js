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

module.exports = {
  resper,
  request
}
