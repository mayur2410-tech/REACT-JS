import React from 'react'

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 min-h-screen text-white">
    {/* Navbar */}
    

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