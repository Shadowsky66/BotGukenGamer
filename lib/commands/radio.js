module.exports = {
  name: `radio`,
  pattern: /radio/,
  description: 'Врубить радио',
  handler: (params, message, client) => {
    const oldDispatcher = client.dispatchers.get(message.guild.id);

    if (oldDispatcher) {
      oldDispatcher.destroy();
    }

    const connection = client.voice.connections.get(message.guild.id)

    if (connection) {
      const dispatcher = connection.play('http://air2.radiorecord.ru:805/tm_320');

      dispatcher.once('disconnect', () => {
        const currentDispatcher = client.dispatchers.get(message.guild.id);

        if (currentDispatcher === dispatcher) {
          client.dispatchers.delete(message.guild.id)
        }
      });

      client.dispatchers.set(message.guild.id, dispatcher);
    }
  },
}