require('dotenv').config();
import User from './models/User'
import { sequelize } from './db';
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.on('message', ctx => {
  console.log(ctx.update.message.from);
});
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('Соединение с БД было успешно установлено');
  } catch (e) {
    console.log('Невозможно выполнить подключение к БД: ', e);
  }

  User.sync()
};

start();