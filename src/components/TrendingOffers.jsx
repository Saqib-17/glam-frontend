import React, { useEffect, useState } from "react";

const TrendingOffers = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <section id='offers' className="bg-[#f0ccb4] py-12">
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
              <button className="bg-purple-600 text-white text-sm font-bold py-2 px-4 rounded hover:bg-purple-700">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TrendingOffers;
