module.exports = {
  name: `join`,
  pattern: /join|summon/,
  description: 'Подключиться к текущему голосовому каналу пользователя',
  handler: async (params, message) => {
    const channel = message.member.voice.channel;

    if (channel) {
      await channel.join();
    }
  },
}