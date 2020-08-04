async function execute(params, message, guildId) {

    console.log(message);
    console.log(guildId);
    // const connection = await voiceChannel.join();

    // if (!voiceChannel) {
    //     return message.channel.send('Зайдите в голосовой канал, я для себя музыку играть не буду!');
    // }

    // const permissions = voiceChannel.permissionsFor(message.client.user);

    // if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
    //     return message.channel.send('Ты хочешь музыки? Тогда дай мне права!');
    // }

    // const radioChannel = 'http://air2.radiorecord.ru:805/tm_320';

    // try {
    //     await voiceChannel.join();
    //     play(message.guild, radioChannel);
    //     const dispatcher = connection.playStream(ytdl(radioChannel))
    //     dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    // }

    // catch (err) {
    //     console.log(err);
    //     return message.channel.send(err);
    // }
}

module.exports = execute;