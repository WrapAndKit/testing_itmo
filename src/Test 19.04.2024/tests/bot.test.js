const { Telegraf  } = require('telegraf');
const bot = require('../src/bot');

test('Bot instance is created successfully', () => {
  expect(bot).toBeInstanceOf(Telegraf);
});

test('Bot responds to unknown message types', async () => {
    bot.context.reply = jest.fn();  
    await bot.handleUpdate({ message: { text: 'msg' } });
    expect(bot.context.reply).toHaveBeenCalledWith('Unknown command: msg');
});