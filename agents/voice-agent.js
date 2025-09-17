// agents/voice-agent.js
require('dotenv').config();
const { ElevenLabs } = require('elevenlabs-node');
const { McpServer } = require('@modelcontextprotocol/server');

const voiceClient = new ElevenLabs({
  apiKey: process.env.ELEVENLABS_API_KEY,
});

const server = new McpServer({
  name: 'VoiceAgent',
  version: '1.0.0',
});

server.tool('convertTextToSpeech', async (text) => {
  const audio = await voiceClient.textToSpeech({ text });
  return { audio };
});

server.tool('convertSpeechToText', async (audioBuffer) => {
  const text = await voiceClient.speechToText(audioBuffer);
  return { text };
});

server.start();
