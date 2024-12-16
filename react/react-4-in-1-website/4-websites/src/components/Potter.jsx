import React, { useState, useEffect } from "react";

const Potter = () => {
  const [language, setLanguage] = useState("en"); // Default language
  const [category, setCategory] = useState(""); // Selected category
  const [data, setData] = useState([]); // Fetched data
  const [loading, setLoading] = useState(false);

  const apiBaseURL = `https://potterapi-fedeperin.vercel.app/${language}`;

  // Fetch Data Based on Selection
  useEffect(() => {
    if (!category) return;

    setLoading(true);
    fetch(`${apiBaseURL}/${category}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((fetchedData) => {
        setData(fetchedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Potter data:", error);
        setLoading(false);
      });
  }, [category, language]);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Welcome to the Wizarding World!
      </h1>

      {/* Language Selector */}
      <div className="flex justify-center mb-4">
        <label htmlFor="language" className="mr-2 font-semibold">
          Select Language:
        </label>
        <select
          id="language"
          className="border rounded-md px-4 py-2"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">France</option>
          <option value="it">Italian</option>
        </select>
      </div>

      {/* Category Selector */}
      <div className="flex justify-center mb-6">
        <label htmlFor="category" className="mr-2 font-semibold">
          Select Category:
        </label>
        <select
          id="category"
          className="border rounded-md px-4 py-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">-- Choose a Category --</option>
          <option value="characters">Characters</option>
          <option value="books">Books</option>
        </select>
      </div>

      {/* Data Display */}
      {loading ? (
        <p className="text-center text-blue-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="p-4 w-60 bg-white rounded-md shadow-md border hover:shadow-lg transition"
            >
              {/* Characters */}
              {item.fullName && (
                <>
                  <img
                    src={item.image}
                    alt={item.fullName}
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                  <h2 className="text-lg font-bold">{item.fullName}</h2>
                  {item.nickname && (
                    <p className="text-sm text-gray-600">
                      Nickname: {item.nickname}
                    </p>
                  )}
                  {item.hogwartsHouse && (
                    <p className="text-sm text-gray-600">
                      House: {item.hogwartsHouse}
                    </p>
                  )}
                  {item.birthdate && (
                    <p className="text-sm text-gray-600">
                      Birthdate: {item.birthdate}
                    </p>
                  )}
                  {item.children && item.children.length > 0 && (
                    <p className="text-sm text-gray-600">
                      Children: {item.children.join(", ")}
                    </p>
                  )}
                </>
              )}

              {/* Houses */}
              {item.name && !item.fullName && (
                <>
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  {item.founder && (
                    <p className="text-sm text-gray-600">
                      Founder: {item.founder}
                    </p>
                  )}
                  {item.headOfHouse && (
                    <p className="text-sm text-gray-600">
                      Head of House: {item.headOfHouse}
                    </p>
                  )}
                </>
              )}

              {/* Books */}
              {item.title && (
                <>
                <img src={item.cover} alt="" />
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  {item.releaseDate && (
                    <p className="text-sm text-gray-600">
                      Release Date: {item.releaseDate}
                    </p>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Potter;
