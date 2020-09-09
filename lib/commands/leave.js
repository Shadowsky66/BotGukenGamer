module.exports = {
  name: `leave`,
  pattern: /leave|kick/,
  description: 'Отключиться от голосового канала',
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