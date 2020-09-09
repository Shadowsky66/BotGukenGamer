module.exports = {
  name: `ping`,
  pattern: /ping/,
  description: 'Пинг-понг',
  handler: (params, message) => {
    message.reply(`pong! ${params}`);
  },
};