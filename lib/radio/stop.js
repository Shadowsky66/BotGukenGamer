function stop(params, message, guildId) {

    message.reply('stop!');
    // if (!message.member.voiceChannel) return message.channel.send('Вы должны быть в голосов чате, чтоб остановить музыку. Не мешай людям!');
    // guildId.connection.dispatcher.end();
}

module.exports = stop;