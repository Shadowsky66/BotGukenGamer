module.exports = {
    pattern: /stop/,
    description: 'stop all',
    handler: (params, message, guildId) => {
        message.member.voice.channel.leave();
    },
}