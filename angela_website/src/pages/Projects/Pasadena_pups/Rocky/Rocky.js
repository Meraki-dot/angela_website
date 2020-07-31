import React from "react";
import Home_navbar from "../../../../constant_elements/Navbar/Navbar";
import { Link } from "react-router-dom";
import RockyImage from "../Images/black_dog.JPG"

const Finley = () => {
  return (
    <div className="main-container" id="pieces-container">
      <div className="nav-container">
        <p>
          <Link id="logo" to="/">
            ANGELA CONTRERAS
          </Link>
        </p>
      </div>
      <Home_navbar />
      <p className="page-title">ROCKY</p>
      <img className="main-image" src={RockyImage} />
      <div className="piece-details">
        <p className="piece-title">Rocky</p>
        <p className="piece-materials">oil & charcoal - 16 x 16</p>
        <p className="piece-story">
          Mutt Scouts rescue from the streets of Tijuana, Mexico
        </p>
      </div>
      <div className="pieces-nav">
        <Link to="/finley">prev</Link>
        <Link to="/pablo_brandi">next</Link>
      </div>
    </div>
  );
};

export default Finley;
