
// Load environment variables from .env file
const Polls = require('discord-polls');
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Client, GatewayIntentBits } = require('discord.js');
const config = require('node-fetch');


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log('I am ready!');
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;{
    
    if (message.content.toLowerCase().includes('hello') || message.content.toLowerCase().includes('hi')) {
        const botResponse = await getCleverbotReply(message.content);
        message.channel.send(botResponse.output);
    }

    if (message.content === 'ping') {
        message.reply('pong');
    }
};

client.login(process.env.DISCORD_TOKEN);

async function getCleverbotReply(input) {
    const apiKey = process.env.CLEVERBOT_API_KEY;
    const url = `https://www.cleverbot.com/getreply?key=${apiKey}&input=${encodeURIComponent(input)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return { output: 'Sorry, I am unable to respond at the moment.' };
    }
}

client.commands = new Map();

// Token from .env file
const token = process.env.DISCORD_TOKEN;

const loadEvents = (dir) => {
    const eventFiles = fs.readdirSync(path.join(__dirname, dir)).filter(file => file.endsWith('.js'));
    for (const file of eventFiles) {
        const event = require(path.join(__dirname, dir, file));
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args, client));
        } else {
            client.on(event.name, (...args) => event.execute(...args, client));
        }
    }
};

const loadCommands = async (dir) => {
    try {
        const commandFiles = await fs.promises.readdir(path.join(__dirname, dir));
        for (const file of commandFiles) {
            const command = require(path.join(__dirname, dir, file));
            client.commands.set(command.name, command);
        }
    } catch (error) {
        console.error('Error loading commands:', error);
    }
};

loadEvents('./events');
loadCommands('./commands');

// Load events and commands as shown in the previous implementation...

client.login(token);});
