const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '1361184278:AAE8cvVhSWWjSEyBt-huX2cbbSus5SQCi4k';

const bot = new TelegramBot(TOKEN, { polling: true });

const answersOnFour = [
  'Семь!',
  '...или семь?',
  'А может быть семь?',
  'Может, всё-таки семь?',
];

const answerOnFour = () =>
  answersOnFour[Math.floor(Math.random() * answersOnFour.length)];

bot.onText(/\/start/, function (msg) {
  bot.sendMessage(msg.chat.id, 'Дарованьки, пидоры!');
});

bot.onText(/.*(?:4|.*7)/, (msg) => {
  Boolean(match[0].split('').filter((word) => word === '7') != '7') &&
    bot.sendMessage(msg.chat.id, '7');
});

bot.onText(/.*(?:4|.*7)/, (msg, match) => {
  Boolean(match[0].split('').filter((word) => word === '7') != '7') &&
    bot.sendMessage(msg.chat.id, '7');
});

bot.onText(/(?:^|[^а-яА-ЯёЁ])(.*(?:четыре|.*семь))/, (msg, match) => {
  Boolean(match[0].split(' ').filter((word) => word === 'семь') != 'семь') &&
    bot.sendMessage(msg.chat.id, answerOnFour());
});

bot.onText(/.*(?:4.*7)/, (msg) => {
  bot.sendMessage(msg.chat.id, '47!');
});

bot.onText(/(?:^|[^а-яА-ЯёЁ])(.*(?:четыре.*семь))/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Сорок семь!');
});

bot.onText(/(?:^|[^а-яА-ЯёЁ])(.*(?:ОБДбот.*как.*дела))/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Заебумба!');
});

bot.onText(/(?:^|[^а-яА-ЯёЁ])(.*(?:ОБДбот.*говно))/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Я ни при чем, меня Сергуня делал!');
});
