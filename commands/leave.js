module.exports = {
  pattern: /leave|kick/,
  description: '',
  handler: async (params, message, client) => {
    const dispatcher = client.dispatchers.get(message.guild.id);

    if (dispatcher) {
      dispatcher.destroy();
    }

    const connection = client.voice.connections.get(message.guild.id)

    if (connection) {
      connection.disconnect();
    }
  },
}