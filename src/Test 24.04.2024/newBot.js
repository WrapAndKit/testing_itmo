const Telegraf = require('telegraf')
const { messageHandler, commandHandler } = require('./handlers')

const bot = new Telegraf('token')
bot.on('message', messageHandler)
bot.on('command', commandHandler)

module.exports = bot