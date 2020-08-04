const Discord = require("discord.js");
const Parser = require('./parser/parser');
const Handler = require('./handler/handler');
const Interactor = require('./interactor/interactor');
var pathToFfmpeg = require('ffmpeg-static');
var ytdl = require('ytdl-core');
require("dotenv").config();

const token = process.env.BOT_TOKEN;
const prefix = process.env.DEFAULT_PREFIX;
const permissions = ['SEND_MESSAGES', 'CONNECT', 'SPEAK'];

const parser = new Parser(prefix);
const handler = new Handler('./commands');
const interactor = new Interactor(parser, handler);

(async () => {
  const bot = new Discord.Client();

  try {
    console.log(`Попытка подключения с токеном: ${token}`);

    await bot.login(token)

    bot.on("ready", () => {
      console.log(`Успешное подключение бота ${bot.user.username}`);

      bot
        .generateInvite(permissions)
        .then(console.log);

      interactor.subscribe(bot, ytdl);
    });
  }

  catch {
    console.log('Не удалось подключится')
  }

})();
