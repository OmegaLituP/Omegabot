import Cleverbot from 'cleverbot-node';

const cleverbotClient = new Cleverbot();
const apiKey = process.env.CLEVERBOT_API_KEY || 'DEFAULT_API_KEY';
cleverbotClient.configure({ botapi: apiKey });

export default cleverbotClient;
