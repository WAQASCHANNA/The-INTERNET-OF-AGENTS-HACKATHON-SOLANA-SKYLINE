// agents/nft-analyst-agent.js
const { Mistral } = require('@mistralai/mistralai');
const { McpServer } = require('@modelcontextprotocol/server');

const mistral = new Mistral({ apiKey: process.env.MISTRAL_API_KEY });

const server = new McpServer({
  name: 'NFTAnalystAgent',
  version: '1.0.0',
});

server.tool('analyzeNFT', async (nft) => {
  const response = await mistral.chat({
    model: 'mistral-codestral',
    messages: [{ role: 'user', content: `Analyze rarity and value of NFT: ${nft}` }],
  });
  return { analysis: response.choices[0].message.content };
});

server.start();
