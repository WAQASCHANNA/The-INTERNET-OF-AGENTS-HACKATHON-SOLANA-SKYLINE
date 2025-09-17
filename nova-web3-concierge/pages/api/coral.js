// pages/api/coral.js
import { CoralClient } from '@coralprotocol/sdk';

const coral = new CoralClient({
  serverUrl: process.env.CORAL_SERVER_URL,
});

export default async function handler(req, res) {
  const { audio } = req.body;

  // Convert speech to text
  const text = await coral.agents.voice.convertSpeechToText(audio);

  // Orchestrate agents
  const nfts = await coral.agents.research.discoverNFTs({ price: '3 SOL' });
  const analysis = await coral.agents.nftAnalyst.analyzeNFT(nfts[0]);

  // Generate response audio
  const responseAudio = await coral.agents.voice.convertTextToSpeech(
    `I found this NFT: ${analysis.summary}. Would you like to mint it?`
  );

  res.status(200).json({ audio: responseAudio });
}
