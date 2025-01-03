import React, { useEffect, useState } from "react";

const TrendingOffers = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch data from API
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch("https://glam-backend.vercel.app/trendingOffers");
        if (!response.ok) {
          throw new Error("Failed to fetch trending offers");
        }
        const data = await response.json();
        setOffers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  // Function to handle "Shop Now" button click
  const handleShopNowClick = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="offers" className="bg-[#f0ccb4] py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-600">Trending Offers</h1>
        <p className="text-lg text-gray-700">Our latest releases, just for you!</p>
      </div>

      {loading ? (
        <div className="text-center text-lg text-gray-500">Loading...</div>
      ) : error ? (
        <div className="text-center text-lg text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-7xl px-6">
          {offers.map((offer) => (
            <div
              key={offer._id} // Use the MongoDB ObjectId as the key
              className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <p className="font-bold text-gray-800 text-lg">{offer.title}</p>
              <p className="text-purple-600 text-sm font-semibold mb-4">
                {offer.offer}
              </p>
              <button
                className="bg-purple-600 text-white text-sm font-bold py-2 px-4 rounded hover:bg-purple-700 transition-all duration-300"
                onClick={handleShopNowClick}
              >
                Shop Now
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
    <div
      className="bg-[#f0ccb4] text-white rounded-xl shadow-2xl p-8 text-center transform transition-all scale-100"
    >
      {/* Close Button */}
      <button
        onClick={handleCloseModal}
        className="absolute top-3 right-3 bg-white text-purple-600 hover:text-purple-800 rounded-full w-8 h-8 flex items-center justify-center shadow-md transform hover:scale-110 transition-all"
      >
        &times;
      </button>
      <div className="flex flex-col items-center space-y-4">
        <div className="bg-white p-3 rounded-full shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-12 h-12 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m-6 8a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-green-600">Added Successfully!</h2>
        <p className="text-lg text-gray-800">Your item has been added to the cart.</p>
        <button
          onClick={handleCloseModal}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg font-bold shadow-md hover:bg-purple-700 transition-all"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
    </section>
  );
};

export default TrendingOffers;
