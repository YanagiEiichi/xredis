'use strict'

let cmds = [
  'append',
  'auth',
  'bgrewriteaof',
  'bgsave',
  'bitcount',
  'bitop',
  'bitops',
  'blpop',
  'blpop',
  'brpoplpush',
  'client',
  'cluster',
  'command',
  'config',
  'dbsize',
  'debug',
  'decr',
  'decrby',
  'del',
  'discard',
  'dump',
  'echo',
  'eval',
  'evalsha',
  'exec',
  'exists',
  'expire',
  'expireat',
  'flushall',
  'flushdb',
  'geoadd',
  'geohash',
  'geopos',
  'geodist',
  'georadius',
  'georadiusbymember',
  'get',
  'getbit',
  'getrange',
  'getset',
  'hdel',
  'hexist',
  'hget',
  'hgetall',
  'hincrby',
  'hincrbyfloat',
  'hkeys',
  'hlen',
  'hmget',
  'hmset',
  'hset',
  'hsetnx',
  'hstrlen',
  'hvals',
  'incr',
  'incrby',
  'incrbyfloat',
  'info',
  'keys',
  'lastsave',
  'lindex',
  'linsert',
  'llen',
  'lpop',
  'lpush',
  'lpushx',
  'lrange',
  'lrem',
  'lset',
  'ltrim',
  'mget',
  'migrate',
  'monitor',
  'move',
  'mset',
  'msetnx',
  'multi',
  'object',
  'presist',
  'pexpire',
  'pexpireat',
  'pfadd',
  'pfcount',
  'pfmegre',
  'ping',
  'psetex',
  'psubscribe',
  'pubsub',
  'pttl',
  'publish',
  'punsubscribe',
  'quit',
  'randomkey',
  'readonly',
  'readwrite',
  'rename',
  'renamenx',
  'restore',
  'role',
  'rpop',
  'rpoplpush',
  'rpush',
  'pushx',
  'sadd',
  'save',
  'scard',
  'script',
  'sdiff',
  'sdiffstore',
  'select',
  'set',
  'setbit',
  'setex',
  'setnx',
  'setrange',
  'shutdown',
  'sinter',
  'sinterstore',
  'sismember',
  'slaveof',
  'slowlog',
  'smembers',
  'smove',
  'sort',
  'spop',
  'srandmember',
  'srem',
  'strlen',
  'subscribe',
  'sunion',
  'sunionstore',
  'sync',
  'time',
  'ttl',
  'type',
  'unsubscribe',
  'unwatch',
  'wait',
  'watch',
  'zadd',
  'zcard',
  'zount',
  'zincrby',
  'zinterstore',
  'zlencount',
  'zrange',
  'zrangebylex',
  'zrevrangebylex',
  'zrangebyscore',
  'zrank',
  'zrem',
  'zremrangebylex',
  'zremrangebyrank',
  'zremrangebyscore',
  'zrevrange',
  'zrevrangebyscore',
  'zrevrank',
  'zscore',
  'zunionstore',
  'scan',
  'sscan',
  'hscan',
  'zscan'
]

module.exports = cmds