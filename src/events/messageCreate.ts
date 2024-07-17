import { Message } from 'discord.js';


module.exports = {
    name: 'messageCreate',
    execute(message: Message) {
        if (message.author.bot) return; // Ignore messages from bots
        
        console.log(`Received message: ${message.content}`);
        
        if (message.content === 'ping') {
            message.channel.send('Pong!'); // Reply with "Pong!" if message content is "ping"
        } else if (message.content === 'hello') {
            message.channel.send('Hello, how are you?'); // Reply with a greeting if message content is "hello"
        } else {
            message.channel.send("I'm sorry, I don't understand."); // Reply with a default message if message content is not recognized
        }
    },
};