import { Client } from 'discord.js';

module.exports = {
    name: 'ready',
    once: true,
    execute(client: Client) {
    if (client.user) {
        console.log(`Logged in as ${client.user.tag}`);
    } else {
        console.error('Error logging in');
    }
        // Add your code here

    },
};