// agents/transaction-agent.js
const { CrossmintSDK } = require('@crossmint/client-sdk');
const { McpServer } = require('@modelcontextprotocol/server');

const crossmint = new CrossmintSDK({
  apiKey: process.env.CROSSMINT_API_KEY,
});

const server = new McpServer({
  name: 'TransactionAgent',
  version: '1.0.0',
});

server.tool('mintNFT', async (nft, user) => {
  const transaction = await crossmint.nfts.mint(nft, user);
  return { transaction };
});

server.start();
