const execute = require('../lib/radio/execute');

module.exports = {
    pattern: /play/,
    description: 'trance - radio',
    handler: (params, message, guild) => {

        message.reply('В разработке');
    },
}