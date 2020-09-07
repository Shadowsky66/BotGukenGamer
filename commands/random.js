const randomNumber = require('../lib/randomNumber');

module.exports = {
  pattern: /ROLL/i,
  handler: (params, message, guildId) => {
    console.log(params);
    if (params[1] === undefined) {
      message.reply(randomNumber(1, params[0]));
      return
    }

    if (params[0] === undefined) {
      message.reply(randomNumber());
      return
    }

    message.reply(randomNumber(params[0], params[1]));
  },
}