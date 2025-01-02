import React, { useEffect, useState } from "react";

const CategoryShowcase = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/category");
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

  return (
    <section className="bg-[#fbe4d5] py-12" id="shop1">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-600">Shop By Category</h1>
        <p className="text-lg text-gray-700">
          Browse through your favorite categories. We've got them all!
        </p>
      </div>

      {loading ? (
        <div className="text-center text-lg text-gray-500">Loading...</div>
      ) : error ? (
        <div className="text-center text-lg text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-7xl px-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-lg p-4 text-center"
            >
              <img
                src={category.image}
                alt={category.title}
                className="rounded-lg mx-auto w-full h-48 object-cover mb-4"
              />
              <p className="font-semibold text-gray-800">{category.title}</p>
              <p className="text-purple-600 text-lg font-bold">
                {category.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CategoryShowcase;
