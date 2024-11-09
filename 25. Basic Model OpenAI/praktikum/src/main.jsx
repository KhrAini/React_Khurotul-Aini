import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import App from './App.jsx';
import RekomendasiMood from './RekomendasiMood';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/rekomendasi-mood" element={<RekomendasiMood />} />
      </Routes>
    </Router>
  </StrictMode>
);

