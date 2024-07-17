import { Command } from './commandHandler';
import { Client, Message } from 'discord.js';

const chat: Command = {
    name: 'chat',
    description: 'Handles chat commands',
    execute: (client: Client, message: Message, args: string[]) => {
        message.channel.send('Chat command executed!');
    }
};

export default chat;
