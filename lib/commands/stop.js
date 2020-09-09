module.exports = {
  name: `stop`,
  pattern: /stop/,
  description: 'Остановиться радио',
  handler: (params, message, client) => {
    const dispatcher = client.dispatchers.get(message.guild.id);

    if (dispatcher) {
      dispatcher.destroy();
    }
  },
}