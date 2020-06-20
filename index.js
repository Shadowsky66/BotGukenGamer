const Discord = require('discord.js');

const bot = new Discord.Client();

let config = require('./config.json');

let token = config.token;
let prefix = config.prefix;

bot.on('ready', () => {
    console.log(`Запустился бот ${bot.user.username}`);
    bot.generateInvite(["ADMINISTRATOR"]).then(link => {
        console.log(link);
    });
});

function randonIntFix(min = 1, max = 100) {
    min = Math.abs(Number(min));
    max = Math.abs(Number(max));

    if (isNaN(min) || isNaN(max)) {
        return "Введи числа, я только их понимаю... пёс";
    }
    if (min == Infinity || max == Infinity) {
        return "Да ты ебанулся, я до стольки считать не умею";
    }

    return Math.floor(min + random() * (max + 1 - min));
}

bot.on('message', msg => {

    if (!msg) {
        return;
    }

    const args = msg.content.slice(prefix.length).trim().split(/\s/g);
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'hello': {
            msg.reply('И тебе не хворать!');
            break;
        }
        case 'roll': {
            if (Array.isArray(args) && args.length == 2) {
                msg.reply(randomIntFix(args[0], args[1]));
                break;
            }
            if (Array.isArray(args) && args.length == 1) {
                msg.reply(randomIntFix(1, args[0]));
                break;
            }
            msg.reply(randomIntFix());
            break;
        }
        case 'help': {
            msg.reply("Ну... я умею пока только псевдослучайные числа генерировать, воспользуйся командой !roll")
        }
    }

});
bot.login(token);