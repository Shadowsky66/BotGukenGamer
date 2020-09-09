const Discord = require("discord.js");
const Parser = require('./parser');
const Handler = require('./handler');
const Interactor = require('./interactor');

require('ffmpeg-static');
require("dotenv").config();

const token = process.env.BOT_TOKEN;
const prefix = process.env.DEFAULT_PREFIX;
const permissions = ['SEND_MESSAGES', 'CONNECT', 'SPEAK'];

const parser = new Parser(prefix);
const handler = new Handler('./commands');
const interactor = new Interactor(parser, handler);

(async () => {
  const bot = new Discord.Client();

  // В этой коллекции будем сохранять ссылки на StreamDispatcher для дальнейшей работы
  bot.dispatchers = new Discord.Collection();

  try {
    console.log(`Попытка подключения с токеном: ${token}`);

    await bot.login(token)

    bot.on("ready", () => {
      console.log(`Успешное подключение бота ${bot.user.username}`);

      bot
        .generateInvite(permissions)
        .then(console.log);

      interactor.subscribe(bot);
    });
  } catch {
    console.log('Не удалось подключится')
  }
})();
