const fs = require('fs');
const path = require('path');

class Handler {
  constructor(commandsDir) {
    this.commands = [];

    fs.readdirSync(commandsDir).forEach((file) => {
      let command = require(path.join(commandsDir, file));

      this.commands.push(command);
    });
  };

  tryToHandleCommand(command, params, message, client, parser) {
    if (command === `help`) {
      this.printHelp(message, parser);

      return;
    }

    const commandToHandle = this.commands.find(({pattern}) => pattern.test(command));

    if (commandToHandle) {
      commandToHandle.handler(params, message, client);
    }
  }

  printHelp(message, parser) {
    let help = ``;

    this.commands.forEach(command => {
      const prefix = parser.getPrefixForGuild(message.guild.id);

      help += `\n\`${prefix}${command.name}\` - ${command.description}`
    })

    message.reply(help);
  }
}

module.exports = Handler