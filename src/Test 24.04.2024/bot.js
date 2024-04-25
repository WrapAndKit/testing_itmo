import {Telegraf} from 'telegraf';

const bot = new Telegraf('MY_TOKEN');

bot.start((ctx) => {
  ctx.reply('Hi.');
});

bot.on('message', (ctx) => {
  ctx.reply('Unknown command: ' + ctx.message.text);
});

export default bot;