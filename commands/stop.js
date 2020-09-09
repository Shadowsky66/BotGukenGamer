module.exports = {
  pattern: /stop/,
  description: 'stop all',
  handler: (params, message, client) => {
    const dispatcher = client.dispatchers.get(message.guild.id);

    if (dispatcher) {
      dispatcher.destroy();
    }
  },
}