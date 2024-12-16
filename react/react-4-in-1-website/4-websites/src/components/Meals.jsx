import React, { useEffect, useState } from "react";

const Meals = () => {
  const [meals, setMeals] = useState([]); // State to store meal data
  const [query, setQuery] = useState(""); // State to store search query
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Function to fetch meals
  const fetchMeals = (searchQuery) => {
    setLoading(true);
    setError(null);

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setMeals(data.meals || []); // Set meals or empty array if no results
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false); // Always turn off loading spinner
      });
  };

  // Fetch meals whenever the query changes
  useEffect(() => {
    fetchMeals(query);
  }, [query]);

  return (
    <div className="bg-[#F4F5F4] min-h-screen flex flex-col items-center p-6">
      {/* Heading */}
      <div className="mt-8 text-center">
        <h1 className="text-5xl font-bold mb-3">
          🍔 The Recipe for Your Next Adventure! 🥗
        </h1>
        <p className="text-xl text-gray-600">
          Browse, search, and cook up something extraordinary today 🔎
        </p>
      </div>

      {/* Search Box */}
      <div className="mt-6 w-full max-w-md">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update query state
          placeholder="Search for a meal..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      {/* Loading State */}
      {loading && <p className="mt-6 text-blue-500">Loading...</p>}

      {/* Error Message */}
      {error && <p className="mt-6 text-red-500">Error: {error}</p>}

      {/* Meals Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-2xl border hover:border-pink-500 transition"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-bold">{meal.strMeal}</h3>
            <p className="text-gray-500">Category : {meal.strCategory}</p>
            <p className="text-gray-500">Area : {meal.strArea}</p>
            <a
              href={meal.strYoutube || "#"}
              target="itself"
              rel="noopener noreferrer"
              className="text-white rounded-lg text-center hover: mt-2 block bg-pink-500"
            >
              View Recipe
            </a>
          </div>
        ))}
      </div>

      {/* No Results */}
      {!loading && meals.length === 0 && query && (
        <p className="mt-6 text-gray-600">
          No meals found for "<strong>{query}</strong>".
        </p>
      )}
    </div>
  );
};

export default Meals;
