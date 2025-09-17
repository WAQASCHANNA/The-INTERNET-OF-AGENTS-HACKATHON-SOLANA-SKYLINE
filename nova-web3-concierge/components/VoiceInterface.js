"use client";

// components/VoiceInterface.js
import { useState } from 'react';

export default function VoiceInterface() {
  const [isListening, setIsListening] = useState(false);

  const handleVoiceCommand = async (audio) => {
    // Send audio to Coral Orchestrator
    const response = await fetch('/api/coral', {
      method: 'POST',
      body: audio,
    });
    const result = await response.json();
    // Play response audio
    const audioBlob = new Blob([result.audio], { type: 'audio/mpeg' });
    const audioUrl = URL.createObjectURL(audioBlob);
    const audioElement = new Audio(audioUrl);
    audioElement.play();
  };

  return (
    <div>
      <button onClick={() => setIsListening(!isListening)}>
        {isListening ? 'Stop' : 'Talk to Nova'}
      </button>
    </div>
  );
}
