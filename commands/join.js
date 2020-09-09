module.exports = {
  pattern: /join|summon/,
  description: '',
  handler: async (params, message) => {
    const channel = message.member.voice.channel;

    if (channel) {
      await channel.join();
    }
  },
}