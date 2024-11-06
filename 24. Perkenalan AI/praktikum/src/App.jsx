import React, { useState } from "react";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// Ambil API Key dari environment variable
const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

// Inisialisasi Google Generative AI dengan API Key
const genAI = new GoogleGenerativeAI(apiKey);

// Dapatkan model yang akan digunakan (gemini)
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-latest",
});

// Konfigurasi opsi pemrosesan AI
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 1000,
  responseMimeType: "text/plain",
};

// Setelan keamanan untuk menyaring konten sensitif
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

function App() {
  const [prompt, setPrompt] = useState("");       // Untuk menyimpan input pengguna
  const [response, setResponse] = useState("");   // Untuk menyimpan respons AI
  const [isLoading, setIsLoading] = useState(false);

  // Fungsi untuk menangani input pengguna dan memanggil API
  const handlePromptSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Memulai sesi chat dengan model dan mengirim pesan pengguna
      const chatSession = model.startChat({
        generationConfig,
        safetySettings,
        history: [],
      });

      const result = await chatSession.sendMessage(prompt); // Menyimpan respons AI
      setResponse(result.response.text());
    } catch (error) {
      console.error("Error:", error);
      setResponse("Terjadi kesalahan saat menghubungi AI :");
    }

    setIsLoading(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Gemini AI Chat</h1>
      <form onSubmit={handlePromptSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Tulis pesan Anda di sini..."
          rows="5"
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Kirim"}
        </button>
      </form>
      {response && (
        <div style={{ marginTop: "20px", whiteSpace: "pre-line" }}>
          <h2>Respons AI:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default App;