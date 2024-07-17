import { Client, Collection, IntentsBitField } from 'discord.js';

import { REST } from '@discordjs/rest';
import dotenv from 'dotenv';
import config from '../config/config.json';
import { loadCommands, Command } from './commands/commandHandler';

dotenv.config();

const client = new Client({ intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages] });
client.commands = new Collection(); // Add this to hold commands

client.once('ready', () => {
    console.log('Omegabot\'s here, time to find out... who\'s the best?');
    loadCommands(client);
});
client.on('messageCreate', async (message) => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const commandName = args.shift()?.toLowerCase() || '';

    const command = client.commands.get(commandName);

    if (!command) return;

    try {
        command.execute(client, message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

client.login(process.env.DISCORD_TOKEN);

export default client;
