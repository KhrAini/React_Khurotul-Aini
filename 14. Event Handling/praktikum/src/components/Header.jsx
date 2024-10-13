import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between shadow-md p-4">
      <h1 className="text-[24px] font-bold">Simple Header</h1>
      <div className="ml-auto">
        <button className="bg-transparent hover:bg-blue-700 hover:text-white text-blue-500 font-bold py-2 px-4 rounded">
          Home  
        </button>
        <button className="bg-transparent hover:bg-blue-700 hover:text-white text-blue-500 font-bold py-2 px-4 rounded">
          Features
        </button>
        <button className="bg-transparent hover:bg-blue-700 hover:text-white text-blue-500 font-bold py-2 px-4 rounded">
          Pricing
        </button>
        <button className="bg-transparent hover:bg-blue-700 hover:text-white text-blue-500 font-bold py-2 px-4 rounded">
          FAQs
        </button>
        <button className="bg-transparent hover:bg-blue-700 hover:text-white text-blue-500 font-bold py-2 px-4 rounded">
          About
        </button>
      </div>
    </header>
  );
};

export default Header;
