module.exports = {
    pattern: /radio/,
    description: 'trance - radio',
    handler: (params, message, guild) => {

        if (message.member.voice.channel) {
            const connection = message.member.voice.channel.join().then((connection) => {
                connection.play('http://air2.radiorecord.ru:805/tm_320');
            })
        } else {
            message.reply('Ты в голосовой канал то зайди');
        }
    },
}