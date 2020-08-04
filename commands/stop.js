const stop = require('../lib/radio/stop');

module.exports = {
    pattern: /stop/,
    description: 'stop all',
    handler: (params, message, guildId) => {
        stop(params, message, guildId)
    },
}