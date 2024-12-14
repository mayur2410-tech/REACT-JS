import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-around  h-20 text-xl font-bold text-white bg-[linear-gradient(273deg,#ff0000,#dd3fe9)] border  items-center ">
        <li>
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
