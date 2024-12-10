import React from "react";
import './Navbar.css'
export const Navbar = () => {
  return (
    <>
      <div className="cointainer nav-bar">
        <div className="left nav-items">Portfolio</div>
        <div className="right">
          <a href="" className="nav-items">Home</a>
          <a href="" className="nav-items">Experience</a>
          <a href="" className="nav-items">Skills</a>
          <a href="" className="nav-items">Projects</a>
          <a href="" className="nav-items">Contact </a>
        </div>
      </div>
    </>
  );
};
