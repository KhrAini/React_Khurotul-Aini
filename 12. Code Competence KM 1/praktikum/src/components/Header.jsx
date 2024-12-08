import React from 'react';
import { Link } from 'react-router-dom';
import Globe from '../assets/globe.png';

const Header = () => {
  return (
    <header className="fixed bg-white w-full flex items-center justify-between shadow-lg p-4 ">
      <img src={Globe} alt="Globe" className="w-12 h-9" />
      <div className="ml-auto space-x-4">
        <Link
          to="/"
          className="bg-transparent hover:bg-[#2C5E1A] hover:text-white text-[#2C5E1A] font-bold py-2 px-4 rounded"
        >
          Home
        </Link>
        <Link
          to="/contact-us"
          className="bg-transparent hover:bg-[#2C5E1A] hover:text-white text-[#2C5E1A] font-bold py-2 px-4 rounded"
        >
          Contact Us
        </Link>
        <Link
          to="/about-us"
          className="bg-transparent hover:bg-[#2C5E1A] hover:text-white text-[#2C5E1A] font-bold py-2 px-4 rounded"
        >
          About Us
        </Link>
      </div>
    </header>
  );
};

export default Header;
