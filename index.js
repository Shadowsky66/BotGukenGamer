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

function isNumOrWhat(arg){

}

function randomInt() {
    let rand = 1 + Math.random() * 100;
    return Math.round(rand);
}

function randomIntFix(min, max) {
    min = Number(min);
    max = Number(max);
    if(min == Infinity || max == Infinity){
        return "Да ты ебанулся, я до стольки считать не умею"
    }
    if (isNaN(min) || isNaN(max)){
        return "Введи числа, я только их понимаю... пёс"
    }
    if (typeof(min) == "number" && typeof(min) == "number"){

        if (min > max){
            min ^= max ^= min ^= max;
        }
        let rand = min + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    } else {
        return "Ты втираешь мне какую-то дичь!";
    }
    
}

bot.on('message', msg => {
    
    if (!msg){
        return;
    }

    const args = msg.content.slice(prefix.length).trim().split(/\s/g);
    const command = args.shift().toLowerCase();
    
    switch (command) {
        case 'hello': {
            msg.reply('world');
            break;
        }
        case 'roll': {
            if (Array.isArray(args) && args.length == 2){
                msg.reply(randomIntFix(args[0], args[1]));
                break;
            }
            if (Array.isArray(args) && args.length == 1){
                msg.reply(randomIntFix(1, args[0]));
                break;
            }
            msg.reply(randomInt());
            break;
        }
        case 'help': {
            msg.reply("Ну... я умею пока только псевдослучайные числа генерировать, воспользуйся командой !roll")
        }
    }
    
});
bot.login(token);