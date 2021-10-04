require('dotenv').config()
const TG = require('node-telegram-bot-api')
const bot = new TG(process.env.BOT_TOKEN , { polling: true })

bot.on('message', (msg) => {
    console.log(msg);
});