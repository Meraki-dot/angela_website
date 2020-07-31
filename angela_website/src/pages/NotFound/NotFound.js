import React from "react";
import Sad_dog from "./sad_dog.jpg";
import { Link } from "react-router-dom";
import Home_navbar from "../../constant_elements/Navbar/Navbar";
import Footer from "../../constant_elements/Footer/Footer";

const NotFound = () => {
  return (
    <div id="notfound-container">
      <div className="nav-container">
        <p>
          <Link id="logo" to="/">
            ANGELA CONTRERAS
          </Link>
        </p>
      </div>
      <Home_navbar />
      <h1>Page Not Found</h1>
      <img className="sad_dog" src={Sad_dog} />
      <Link className="back-home-button" to="/">
        Back Home
      </Link>
      <div className="footer-holder">
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;
