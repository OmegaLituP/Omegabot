const cleverbot = require('cleverbot-api');
const config = require('../config.json');
require('dotenv').config();

// Import the necessary modules

// Create a new instance of the Cleverbot API
// Import the discord.js module
const Discord = require('discord.js');


// Remove the duplicate declaration of 'bot'

// The ready event is vital, it means that only _after_ this will your bot start reacting to information
// received from Discord

bot.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
bot.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

// Log our bot in using the token from https://discord.com/developers/applications
bot.login('DISCORD_TOKEN');


// Function to handle incoming messages
// Function to handle incoming messages
function handleMessage(..._args) {
    // Check if the message is a trigger for the bot to engage in conversation
    if (message.includes('hello') || message.includes('hi')) {
        // Generate a witty response using the Cleverbot API
        bot.getReply(message)
            .then(response => {
                // Send the response back to the user
                console.log(response);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}

// Example usage
handleMessage('Hello, bot!');
