import React from "react";
import Home_navbar from "../../../../constant_elements/Navbar/Navbar";
import { Link } from "react-router-dom";

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
      <p className="page-title">FINLEY</p>
      <img className="main-image" src={require("../Images/Finley.JPG")} />
      <div className="piece-details">
        <p className="piece-title">Mama Finley & Her Eight Puppies</p>
        <p className="piece-materials">oil & charcoal - 3 x 24</p>
        <p className="piece-story">
          Finley rescued from the streets of Pasadena, 2 weeks later I learned
          she was pregnant with eight puppies.
        </p>
      </div>
      <div className="back-button-container">
        <Link className="back-button" to="/pasadena_pups">
          back to overview
        </Link>
      </div>
      <div className="pieces-nav">
        <Link to="/pablo_brandi">prev</Link>
        <Link to="/rocky">next</Link>
      </div>
    </div>
  );
};

export default Finley;
