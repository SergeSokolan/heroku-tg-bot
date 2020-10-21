const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '1361184278:AAE8cvVhSWWjSEyBt-huX2cbbSus5SQCi4k';

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, `Hi, ${msg.from.first_name}!`);
});
