import { Command } from './commandHandler';
import { Client, Message } from 'discord.js';

const ping: Command = {
    name: 'ping',
    description: 'Replies with Pong!',
    execute: (client: Client, message: Message, args: string[]) => {
        message.channel.send('Pong!');
    }
};

export default ping;