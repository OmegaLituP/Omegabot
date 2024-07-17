import { Client, Collection } from 'discord.js';
import fs from 'fs';

interface Command {
    name: string;
    description: string;
    execute: (client: Client, message: any, args: string[]) => void;
}

declare module 'discord.js' {
    interface Client {
        commands: Collection<string, Command>;
    }
}

const commands = new Collection<string, Command>();

const loadCommands = (client: Client) => {
    const commandFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.ts') || file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./${file}`) as Command;
        commands.set(command.name, command);
    }

    client.commands = commands;
};

export { loadCommands, Command };