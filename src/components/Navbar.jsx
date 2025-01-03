import React, { useState } from 'react';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-gray-800 text-white z-50 shadow-lg">
        <div className="text-2xl font-bold">
          <a href="#home">Glamkey</a>
        </div>
        <ul className="flex items-center space-x-6">
          <li><a href="./" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400">About</a></li>
          <li><a href="#shop" className="hover:text-yellow-400">Shop</a></li>
          <li><a href="#offers" className="hover:text-yellow-400">Trending Offers</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          <li>
            <button
              onClick={openModal}
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
            >
              Signup
            </button>
          </li>
        </ul>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Create an Account</h2>
            <form action="/submit-signup" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
