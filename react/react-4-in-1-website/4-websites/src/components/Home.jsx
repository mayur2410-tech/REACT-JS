import React from 'react'

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 min-h-screen text-white">
    {/* Navbar */}
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">DataWorld</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#meal" className="text-lg hover:underline">
              Meals
            </a>
          </li>
          <li>
            <a href="#cocktail" className="text-lg hover:underline">
              Cocktails
            </a>
          </li>
          <li>
            <a href="#potter" className="text-lg hover:underline">
              Potter
            </a>
          </li>
          <li>
            <a href="#bank" className="text-lg hover:underline">
              Bank
            </a>
          </li>
        </ul>
      </div>
    </nav>

    {/* Hero Section */}
    <section className="text-center py-20 px-4">
      <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-600 mb-4">
        Welcome to the World of Recipes, Potter Spells, and Banking!
      </h1>
      <p className="text-lg sm:text-xl font-light mb-8">
        Discover amazing meals, potter spells, and more on this fun journey!
      </p>
      <a
        href="#explore"
        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white shadow-lg text-lg hover:scale-105 transition-transform"
      >
        Explore Now
      </a>
    </section>

    {/* Footer */}
    <footer className="bg-gray-900 py-4">
      <div className="text-center text-gray-400 text-sm">
        © 2024 DataWorld. All Rights Reserved.
      </div>
    </footer>
  </div>
  )
}

export default Home