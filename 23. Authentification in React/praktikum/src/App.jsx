import React from 'react';
import Header from './components/Header';
import CreateProduct from './components/CreateProduct';
import LandingPage from './components/LandingPage';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Halaman login */}
        <Route path="/login" element={<Login />} />

        {/* ProtectedRoute untuk LandingPage setelah login */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <LandingPage />
            </ProtectedRoute>
          }
        />

        {/* Route lainnya */}
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
