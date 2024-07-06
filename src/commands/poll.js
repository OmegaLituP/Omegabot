client.on('interactionCreate', async (interaction) => {
    if (interaction.commandName === 'poll') {
      // Create a new poll
      const title = 'What is your favorite programming language?';
      const choices = ['JavaScript', 'Python', 'Java', 'C++'];
      const poll = await Polls.startPoll(interaction, title, choices);
      console.log(`Poll created: ${poll.id}`);
    }
  });