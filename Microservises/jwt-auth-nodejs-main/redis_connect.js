const redis = require('redis');

// connect to redis
const redis_client = redis.createClient(6379, '127.0.0.1');

redis_client.on('connect', function () {
    console.log('redis client connected');
});

module.exports = redis_client;