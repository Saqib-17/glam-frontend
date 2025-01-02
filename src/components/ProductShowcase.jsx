import React, { useEffect, useState } from "react";

const ProductShowcase = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
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
              key={product._id} // Ensure that MongoDB ObjectId is used as the key
              className="bg-white rounded-lg shadow-lg p-4 text-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className="rounded-lg mx-auto w-full h-48 object-cover mb-4"
              />
              <p className="font-semibold text-gray-800">{product.name}</p>
              <p className="text-pink-600 text-lg font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductShowcase;
