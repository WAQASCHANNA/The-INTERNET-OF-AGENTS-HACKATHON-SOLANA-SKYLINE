// coral-server/index.js
const { CoralServer } = require('@coralprotocol/coral-server');

const server = new CoralServer({
  agents: {
    voice: process.env.VOICE_AGENT_URL,
    research: process.env.RESEARCH_AGENT_URL,
    nftAnalyst: process.env.NFT_ANALYST_URL,
    transaction: process.env.TRANSACTION_AGENT_URL,
  },
});

server.start();
