import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoryShowcase = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null); // To store selected category
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const navigate = useNavigate();

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://glam-backend.vercel.app/category"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Function to handle button click
  const handleButtonClick = (category) => {
    setSelectedCategory(category); // Set selected category
    setIsModalOpen(true); // Open modal
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null); // Clear selected category
  };

  // Function to confirm purchase and navigate
  const handleConfirmPurchase = () => {
    setIsModalOpen(false);
    navigate("/coming-soon");
  };

  return (
    <section className="bg-[#fbe4d5] py-12" id="shop1">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-600">
          Shop By Category
        </h1>
        <p className="text-lg text-gray-700">
          Browse through your favorite categories. We've got them all!
        </p>
      </div>

      {loading ? (
        <div className="text-center text-lg text-gray-500">Loading...</div>
      ) : error ? (
        <div className="text-center text-lg text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-7xl px-6 ">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-lg p-4 text-center transform hover:-translate-y-3 transition-transform duration-300"
            >
              <img
                src={category.image}
                alt={category.title}
                className="rounded-lg mx-auto w-full h-48 object-cover mb-4"
              />
              <p className="font-semibold text-gray-800">{category.title}</p>
              <button
                className="bg-purple-600 text-white text-sm font-bold py-2 px-4 rounded hover:bg-purple-700 transition-all mt-2"
                onClick={() => handleButtonClick(category)}
              >
                {category.price}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Fancy Modal */}
      {isModalOpen && selectedCategory && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-8 text-center relative max-w-md w-full transform transition-all scale-100">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              Confirm Purchase
            </h2>
            <p className="text-gray-700 mb-6">
              Are you sure you want to purchase{" "}
              <span className="font-bold">{selectedCategory.title}</span> for{" "}
              <span className="font-bold">{selectedCategory.price}</span>?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-all"
                onClick={handleConfirmPurchase}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition-all"
                onClick={handleCloseModal}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CategoryShowcase;
