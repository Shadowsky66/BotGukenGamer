const Discord = require("discord.js");

const bot = new Discord.Client();

require("dotenv").config();

let token = process.env.BOT_TOKEN;
let prefix = process.env.BOT_PREFIX;

const randomNumber = require("lib/random");

bot
  .login(token)
  .on("ready", () => {
    console.log(`Запустился бот ${bot.user.username}`);
    bot.generateInvite(["ADMINISTRATOR"]).then((link) => {
      console.log(link);
    });
  })
  .on("message", (msg) => {
    if (!msg) {
      return;
    }

    const args = msg.content.slice(prefix.length).trim().split(/\s/g);
    const command = args.shift().toLowerCase();

    switch (command) {
      case "hello": {
        msg.reply("И тебе не хворать!");
        break;
      }
      case "пёс": {
        msg.reply(
          "Паша, блять, ну ты же адекватный человек, нахуя оно тебе надо? Не доёбывай бота!"
        );
        break;
      }
      case "пес": {
        msg.reply("Слышь псина, куда ты идёшь?");
        break;
      }
      case "Паша": {
        msg.reply("Паша пёс");
        break;
      }
      case "roll": {
        if (Array.isArray(args) && args.length == 2) {
          msg.reply(randomNumber(args[0], args[1]));
          break;
        }
        if (Array.isArray(args) && args.length == 1) {
          msg.reply(randomNumber(1, args[0]));
          break;
        }
        msg.reply(randomNumber());
        break;
      }
      case "help": {
        msg.reply(
          "Ну... я умею пока только псевдослучайные числа генерировать, воспользуйся командой !roll"
        );
      }
    }
  });
