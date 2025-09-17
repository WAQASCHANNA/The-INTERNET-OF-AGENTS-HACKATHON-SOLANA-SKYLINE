// agents/research-agent.js
require('dotenv').config();
const { Mistral } = require('@mistralai/mistralai');
const { McpServer } = require('@modelcontextprotocol/server');

const mistral = new Mistral({ apiKey: process.env.MISTRAL_API_KEY });

const server = new McpServer({
  name: 'ResearchAgent',
  version: '1.0.0',
});

server.tool('discoverNFTs', async (criteria) => {
  const response = await mistral.chat({
    model: 'mistral-medium',
    messages: [{ role: 'user', content: `Find NFTs under ${criteria.price} SOL with traits: ${criteria.traits}` }],
  });
  return { nfts: response.choices[0].message.content };
});

server.start();
