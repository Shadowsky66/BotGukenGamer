const fs = require('fs');

class Handler {
  constructor(path) {
    this.commands = [];

    fs.readdirSync(path).forEach((file) => {
      let command = require('../commands/' + file);

      this.commands.push(command);
    })
  };

  tryToHandleCommand(command, params, message, client) {
    const commandToHandle = this.commands.find(({pattern}) => pattern.test(command));

    if (commandToHandle) {
      commandToHandle.handler(params, message, client);
    }
  }

}

module.exports = Handler