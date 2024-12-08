import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
