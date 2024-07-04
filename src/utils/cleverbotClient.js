const fetch = require('node-fetch');

async function getCleverbotReply(input, cs) {
  const apiKey = process.env.CLEVERBOT_API_KEY;
  const url = `https://www.cleverbot.com/getreply?key=${apiKey}&input=${encodeURIComponent(input)}&cs=${cs || ''}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Cleverbot API error:', error);
    return { output: "I'm having trouble thinking right now!" };
  }
}

module.exports = { getCleverbotReply };
