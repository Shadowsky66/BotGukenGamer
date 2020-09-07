class Interactor {

    constructor(parser, handler, audio) {
        this.handler = handler;
        this.parser = parser;
        this.audio = audio;
    }

    subscribe(bot) {

        bot.on('message', (message) => {
            const { content, guild } = message;
            const voiceChannel = message.member.voice.channel;

            if (this.parser.looksLikeCommand(content, guild)) {
                const [command, ...params] = this.parser.parseCommand(content, guild.id);

                this.handler.tryToHandleCommand(command, params, message, guild, this.audio);
            }
        });
    }
}

module.exports = Interactor;