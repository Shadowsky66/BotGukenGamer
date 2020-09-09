module.exports = {
  pattern: /ping/,
  description: '',
  handler: (params, message) => {
    message.reply(`pong! ${params}`);
  },
};