module.exports = {
    pattern: /help/,
    description: 'information about commands',
    handler: (params, message, guildId) => {
        message.reply('!radio - включить трансляцию радио Trancemission. !stop - Прекратить трансляцию. !roll - случайное число от 1 до 100');
    },
};