const fs = require('fs');

class Handler {

    constructor(path) {

        this.commands = [];
        console.log(path);
        fs.readdirSync(path).forEach((file) => {
            let command = require('../commands/' + file);

            this.commands.push(command);
        })
    };

    tryToHandleCommand(command, params, message, guild) {

        const commandToHandle = this.commands.find(({ pattern }) => pattern.test(command));

        if (commandToHandle) {

            return commandToHandle.handler(params, message, message.guild);
        }

        // throw new Error(`Command ${command} not found`);
    }

}

module.exports = Handler