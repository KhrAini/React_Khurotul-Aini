import React, { useState } from "react";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import './App.css';

function App() {
  const [inputUser, setInputUser] = useState("");
  const [response, setResponse] = useState("default");
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = "AIzaSyAtY1guHkiZvVBXhnT-05mbn0gEe5iscfw";
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 1000,
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

  function handleChange(e) {
    setInputUser(e.target.value);
  }

  const handlePromptSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const chatSession = model.startChat({
        generationConfig,
        safetySettings,
        history: [],
      });

      const result = await chatSession.sendMessage(inputUser);
      setResponse(result.response.text());
      setInputUser("");
    } catch (error) {
      console.error("Error:", error);
      setResponse("Terjadi kesalahan saat menghubungi AI.");
    }

    setIsLoading(false);
  };

  return (
    <div className="container">
      <h1>AI Chat</h1>
      <input
        type="text"
        value={inputUser}
        onChange={handleChange}
        placeholder="Masukkan pertanyaan Anda..."
        className="input-field"
      />
      <button
        onClick={handlePromptSubmit}
        type="button"
        disabled={isLoading}
        className="button"
      >
        {isLoading ? "Loading..." : "Kirim"}
      </button>
      <p className="response">{response}</p>
    </div>
  );
}

export default App;
