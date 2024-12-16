import React, { useEffect, useState } from "react";

const Cocktail = () => {
  const [cocktail, setCocktail] = useState([]);
  const [query, setQuery] = useState(""); // User input
  const [debouncedQuery, setDebouncedQuery] = useState(""); // Debounced input
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Debounce logic: Update `debouncedQuery` after 500ms of no user typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer); // Cleanup on unmount or query change
  }, [query]);

  // Fetch cocktails based on the debounced query
  const fetchCocktail = (searchQuery) => {
    setLoading(true);
    setError(null);

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCocktail(data.drinks || []);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Fetch data whenever the debounced query changes
  useEffect(() => {
    if (debouncedQuery) {
      fetchCocktail(debouncedQuery);
    } else {
      // Default fetch when query is empty (optional)
      fetchCocktail("margarita"); // Example: Show margarita cocktails by default
    }
  }, [debouncedQuery]);

  return (
    <div className="bg-[#F4F5F4] min-h-screen flex flex-col items-center p-6">
      <div className="text-center mt-8">
        <h1 className="text-5xl font-bold mb-3">🍹 The Recipe for Your Next Cheers! 🍸</h1>
        <p className="text-xl text-gray-600">
          Discover, shake, and sip something extraordinary today 🔎
        </p>
      </div>

      {/* Search Box */}
      <div className="mt-6 max-w-full w-full text-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a Cocktail ..."
          className="w-80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Loading State */}
      {loading && <p className="text-blue-600 mt-6">Loading ...</p>}

      {/* Error State */}
      {error && <p className="text-red-600 mt-6">{error.message}</p>}

      {/* Cocktail Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cocktail.map((drink) => (
          <div
            key={drink.idDrink}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-2xl border hover:border-blue-500 transition"
          >
            <img
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-bold">{drink.strDrink}</h3>
            <p className="text-gray-500">Category: {drink.strCategory}</p>
            <p className="text-gray-500">Served In: {drink.strGlass || "N/A"}</p>
            <a
              href={"#"}
              target="itself"
              rel="noopener noreferrer"
              className="text-white rounded-lg text-center hover: mt-2 block bg-blue-500"
            >
              View Recipe
            </a>
          </div>
        ))}
      </div>

      {/* No Results Found */}
      {!loading && cocktail.length === 0 && debouncedQuery && (
        <p className="mt-6 text-gray-600">
          No cocktails found for "<strong>{debouncedQuery}</strong>".
        </p>
      )}
    </div>
  );
};

export default Cocktail;
