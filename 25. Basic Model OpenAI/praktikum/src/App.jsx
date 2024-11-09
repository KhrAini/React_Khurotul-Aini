import React, { useState } from "react";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import './App.css';
import { Link } from "react-router-dom";
import { marked } from "marked";

function App() {
  const [inputUser, setInputUser] = useState("");
  const [response, setResponse] = useState("kamu akan mendapatkan jawabanmu di sini ya");
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

  const isEntertainmentRelated = (question) => {
    const keywords = ["film", "movie", "lagu", "musik", "music", "singer", "band", "aktor", "aktris"];
    return keywords.some(keyword => question.toLowerCase().includes(keyword));
  };

  const handlePromptSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!isEntertainmentRelated(inputUser)) {
      setResponse("Mohon masukkan pertanyaan terkait film, lagu, atau dunia hiburan.");
      setIsLoading(false);
      return;
    }

    const themedPrompt = `Jawab hanya jika pertanyaan terkait dunia hiburan seperti film, lagu, musik, atau aktor: ${inputUser}`;

    try {
      const chatSession = model.startChat({
        generationConfig,
        safetySettings,
        history: [],
      });

      const result = await chatSession.sendMessage(themedPrompt);
      const markdownResponse = result.response.text();
      const htmlResponse = marked(markdownResponse);

      setResponse(htmlResponse);
      setInputUser("");
    } catch (error) {
      console.error("Error:", error);
      setResponse("Terjadi kesalahan saat menghubungi AI.");
    }

    setIsLoading(false);
  };

  return (
    <div className="container">
      <h1>Q&A Dunia Hiburan</h1>
      <input
        type="text"
        value={inputUser}
        onChange={handleChange}
        placeholder="Masukkan pertanyaan tentang film atau lagu..."
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
      
      <div 
        className="response-box" 
        dangerouslySetInnerHTML={{ __html: response }}
      ></div>

      <Link to="/rekomendasi-mood">
        <button className="button">Cari rekomendasi berdasarkan mood anda</button>
      </Link>
    </div>
  );
}

export default App;
