import React from "react";
import "./Home.css";
import img from 'G:/2ND SEM/react/portfolio website/portfolio/src/assets/img.jpeg'
export const Home = () => {
  return (
    <>
      <div className="container home">
        <div className="left">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <a href="#" className="btn btn-outline-warning">
            Download Resume
          </a>
        </div>
        <div className="right">
            <div className="img">
            <img src={img} alt="image" />
            </div>
        </div>
      </div>
    </>
  );
};