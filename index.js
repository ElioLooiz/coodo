require('dotenv').config()
const sequelize = require('./db');
const TG = require('node-telegram-bot-api')
const bot = new TG(process.env.BOT_TOKEN , { polling: true })



const start = async () => {

    try {
        await sequelize.authenticate()
        await sequelize.sync()
    } catch (e) {
        console.log('Подключение к бд сломалось', e)
    }

    bot.on('message', (msg) => {
        console.log(msg);
        const text = msg.text;
        const id = msg.chat.id;
        bot.sendMessage(id, 'тчтлен');
    });
}

start()
