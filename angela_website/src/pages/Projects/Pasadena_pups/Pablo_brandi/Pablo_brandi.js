import React from "react";
import Home_navbar from "../../../../constant_elements/Navbar/Navbar";
import { Link } from "react-router-dom";
import Pablo_Brandi_Image from "../Images/Two_dogs_playing.JPG"

const Pablo_brandy = () => {
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
      <p className="page-title">PABLO & BRANDI</p>
      <img className="main-image" src={Pablo_Brandi_Image} />
      <div className="piece-details">
        <p className="piece-title">Pablo & Brandi</p>
        <p className="piece-materials">oil & charcoal - 16 x 16</p>
        <p className="piece-story">
          Mutt Scouts rescue from the streets of Tijuana, Mexico
        </p>
      </div>
      <div className="pieces-nav">
        <Link to="/rocky">prev</Link>
        <Link to="/finley">next</Link>
      </div>
    </div>
  );
};

export default Pablo_brandy;
