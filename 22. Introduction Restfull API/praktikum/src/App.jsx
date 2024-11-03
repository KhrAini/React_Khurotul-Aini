import React from 'react';
import Header from './components/Header';
import CreateProduct from './components/CreateProduct';
import LandingPage from './components/LandingPage';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
