import React, { useState } from "react";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import './App.css';
import { marked } from "marked";

function RekomendasiMood() {
  const [mood, setMood] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = "AIzaSyAtY1guHkiZvVBXhnT-05mbn0gEe5iscfw";
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

  const generationConfig = {
    temperature: 0.7,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 500,
    responseMimeType: "text/plain",
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const handleMoodSelection = (selectedMood) => {
    setMood(selectedMood);
    generateRecommendation(selectedMood);
  };

  const generateRecommendation = async (selectedMood) => {
    setIsLoading(true);
    const prompt = `Berikan rekomendasi ${selectedMood === "sedih" ? "film atau lagu yang bisa meningkatkan suasana hati" : `film atau lagu untuk suasana hati yang ${selectedMood}`}.`;

    try {
      const chatSession = model.startChat({
        generationConfig,
        safetySettings,
        history: [],
      });

      const result = await chatSession.sendMessage(prompt);
      const markdownResponse = result.response.text();
      const htmlResponse = marked(markdownResponse);

      setResponse(htmlResponse);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Terjadi kesalahan saat menghubungi AI.");
    }

    setIsLoading(false);
  };

  return (
    <div className="container">
      <h1>Rekomendasi Berdasarkan Mood</h1>
      <div className="mood-buttons">
        <button onClick={() => handleMoodSelection("senang")}>Senang</button>
        <button onClick={() => handleMoodSelection("sedih")}>Sedih</button>
        <button onClick={() => handleMoodSelection("termotivasi")}>Termotivasi</button>
      </div>
      {isLoading ? <p>Loading...</p> : 
        <p className="response-box" dangerouslySetInnerHTML={{ __html: response }} />}
    </div>
  );
}

export default RekomendasiMood;
