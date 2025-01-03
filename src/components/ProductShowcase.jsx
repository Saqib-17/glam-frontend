import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductShowcase = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null); // To store selected product
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const navigate = useNavigate();

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://glam-backend.vercel.app/products"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Function to handle button click
  const handleButtonClick = (product) => {
    setSelectedProduct(product); // Set selected product
    setIsModalOpen(true); // Open modal
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null); // Clear selected product
  };

  // Function to confirm purchase and navigate
  const handleConfirmPurchase = () => {
    setIsModalOpen(false);
    navigate("/coming-soon");
  };

  return (
    <section className="bg-[#fdf2e9] py-12" id="shop">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-pink-600">
          Rings to Cherish Forever
        </h1>
        <p className="text-lg text-gray-600">
          Celebrate Forever with the Perfect Engagement Ring
        </p>
      </div>

      {loading ? (
        <div className="text-center text-lg text-gray-500">Loading...</div>
      ) : error ? (
        <div className="text-center text-lg text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-7xl px-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between h-full"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg mx-auto w-full h-48 object-cover mb-4"
              />
              <div className="flex flex-col flex-grow">
                <p className="font-semibold text-gray-800">{product.name}</p>
              </div>
              <div className="flex items-end justify-center mt-4">
                <button
                  className="bg-pink-600 text-white text-sm font-bold py-2 px-4 rounded hover:bg-pink-700 transition-all"
                  onClick={() => handleButtonClick(product)}
                >
                  {product.price}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Fancy Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-8 text-center relative max-w-md w-full transform transition-all scale-100">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-pink-600 mb-4">
              Confirm Purchase
            </h2>
            <p className="text-gray-700 mb-6">
              Are you sure you want to purchase{" "}
              <span className="font-bold">{selectedProduct.name}</span> for{" "}
              <span className="font-bold">{selectedProduct.price}</span>?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-all"
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

export default ProductShowcase;
