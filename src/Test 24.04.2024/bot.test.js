import {Telegraf} from 'telegraf';
import bot from './bot';

test('Bot instance is created successfully', () => {
  expect(bot).toBeInstanceOf(Telegraf);
});