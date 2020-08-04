module.exports = {
    pattern: /ping/,
    description: 'Ping!',
    handler: (params, message, guildId) => {
        message.reply('pong!' + ' ' + params);
    },
};