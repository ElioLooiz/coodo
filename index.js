require('dotenv').config()
const TG = require('telegram-bot-api')
const api = new TG({
    token: process.env.BOT_TOKEN
})

api.getMe()
.then(console.log)
.catch(console.err)