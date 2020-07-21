const Discord = require("discord.js");
const randomNumber = require("./lib/random");

require("dotenv").config();

const token = process.env.BOT_TOKEN;
const prefix = process.env.BOT_PREFIX;
const permissions = ['SEND_MESSAGES'];

(async () => {
  const bot = new Discord.Client();

  try {
    console.log(`Trying authenticate with token ${token}`);

    await bot.login(token)

    bot
      .on("ready", () => {
        console.log(`Authenticated successfully as ${bot.user.username}`);

        bot
          .generateInvite(permissions)
          .then(console.log);
      })
      .on("message", (msg) => {
        if (!msg) {
          console.log(`Received empty message. Returning...`);

          return;
        }

        console.log(`Received message`, msg);

        const args = msg.content.slice(prefix.length).trim().split(/\s/g);
        const command = args.shift().toLowerCase();

        console.log(`Trying to switch command ${command} with args`, args);

        const reply = (content) => {
          console.log(`Sending reply: ${content}`);

          msg.reply(content)
            .then(() => console.log(`Reply sent`))
            .catch((e) => console.error(`Could not sent message`, e));
        };

        switch (command) {
          case "hello": {

            reply("И тебе не хворать!");
            break;
          }
          case "пёс": {
            reply(
              "Паша, блять, ну ты же адекватный человек, нахуя оно тебе надо? Не доёбывай бота!"
            );
            break;
          }
          case "пес": {
            reply("Слышь псина, куда ты идёшь?");
            break;
          }
          case "паша": {
            reply("Паша пёс");
            break;
          }
          case "roll": {
            if (Array.isArray(args) && args.length === 2) {
              reply(randomNumber(args[0], args[1]));
              break;
            }
            if (Array.isArray(args) && args.length === 1) {
              reply(randomNumber(1, args[0]));
              break;
            }
            reply(randomNumber());
            break;
          }
          case "help": {
            reply(
              "Ну... я умею пока только псевдослучайные числа генерировать, воспользуйся командой !roll"
            );
            break;
          }
          default: {
            console.log(`Command not found. Reply will not be sent`);
            break;
          }
        }
      });
  } catch (e) {
    console.error(`Could not authenticate or initialization failed. See error below`);
    console.error(e);
  }
})();

