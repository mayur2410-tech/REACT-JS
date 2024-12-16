import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location=useLocation();
  const isCocktailRoute= location.pathname==="/cocktail";
  return (
    <nav
      className={`h-20 text-xl font-bold text-white border flex justify-around items-center ${
        isCocktailRoute
          ? "bg-blue-500" // Blue for Cocktail route
          : "bg-[linear-gradient(273deg,#ff0000,#dd3fe9)]" // Default gradient
      }`}
    >    
 <ul className="flex justify-around space-x-40">        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/meal">Meals</Link>
        </li>
        <li>
          <Link to='/cocktail'>Cocktail</Link>
        </li>
        <li>
          <Link to="/potter">Potter</Link>
        </li>
        <li>
          <Link to='/bank'>Bank</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
