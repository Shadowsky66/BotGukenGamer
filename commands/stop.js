module.exports = {
    pattern: /stop/,
    description: 'stop all',
    handler: (params, message, guildId) => {
        if (message.member.voice.channel) {
            message.member.voice.channel.leave();
        }
    },
}