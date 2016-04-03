'use strict'

module.exports = {
  request: function (client, req) {
    return new Promise((resolve, reject) => {
      let chunks = []
      let len = 0

      client.end(req)
      client.on('data', (chunk) => {
        chunks.push(chunk)
        len += chunk.length
      })
      client.on('end', () => resolve(Buffer.concat(chunks, len)))
      client.on('error', reject)
    })
  }
}
