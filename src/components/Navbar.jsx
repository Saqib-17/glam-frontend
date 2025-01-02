import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold">
        <a href="#home">Glamkey</a>
      </div>
      <ul className="flex space-x-6">
        <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
        <li><a href="#about" className="hover:text-yellow-400">About</a></li>
        <li><a href="#shop" className="hover:text-yellow-400">Shop</a></li>
        <li><a href="#offers" className="hover:text-yellow-400">Trending Offers</a></li>
        <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
