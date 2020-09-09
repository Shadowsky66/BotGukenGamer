class Interactor {
  constructor(parser, handler) {
    this.handler = handler;
    this.parser = parser;
  }

  subscribe(client) {
    client.on('message', (message) => {
      const {content, guild} = message;

      if (this.parser.looksLikeCommand(content, guild)) {
        const [command, ...params] = this.parser.parseCommand(content, guild.id);

        this.handler.tryToHandleCommand(command, params, message, client, this.parser);
      }
    });
  }
}

module.exports = Interactor;