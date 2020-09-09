const randomNumber = require('../randomNumber');

module.exports = {
  name: `roll`,
  pattern: /roll/i,
  description: `Бросить монетку`,
  handler: (params, message, client) => {
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