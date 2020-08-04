class Interactor {

    constructor(parser, handler) {
        this.handler = handler;
        this.parser = parser;
    }

    subscribe(bot, ytdl) {

        bot.on('message', (message) => {
            const { content, guild } = message;
            const voiceChannel = message.member.voice.channel;

            if (this.parser.looksLikeCommand(content, guild)) {
                const [command, ...params] = this.parser.parseCommand(content, guild.id);

                this.handler.tryToHandleCommand(command, params, message, guild);

            }

            if (message.member.voice.channel) {
                const voiceChannel = message.member.voice.channel;
            }

            plays(voiceChannel);

        });

        async function plays(voiceChannel) {
            const connection = await voiceChannel.join();
            connection.play('http://air2.radiorecord.ru:805/tm_320');
        }
    }
}

module.exports = Interactor;