require('dotenv').config()
const { Telegraf } = require('telegraf')
const { Sequelize } = require('sequelize')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.on('message', ctx => {
    console.log(ctx.update.message.from)
})
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

// // Enable graceful stop
// process.once('SIGINT', () => bot.stop('SIGINT'))
// process.once('SIGTERM', () => bot.stop('SIGTERM'))