import React from "react";
import Home_navbar from "../../../constant_elements/Navbar/Navbar";
import { Link } from "react-router-dom";

const Pasadena_pups = () => {
  return (
    <div className="main-container" id="pasadena-pups-container">
      <div className="nav-container">
        <p>
          <Link id="logo" to="/">
            ANGELA CONTRERAS
          </Link>
        </p>
      </div>
      <Home_navbar />
      <p className="page-title">PASADENA PUPS</p>
      <Link>
        <div className="beige_color_overlay overlay-right">
          <img
            className="project_page_piece_image"
            src={require("./Images/Mom_dog_feeding.JPG")}
          />
          <div className="project_page_piece_info right_oriented_project">
            <p className="project_page_piece_materials">
              oil & charcoal - 3 x 24
            </p>
            <h2 className="project_page_piece_title">FINLEY</h2>
            <button className="project_page_piece_button">
              click for more details
            </button>
          </div>
        </div>
      </Link>
      <Link>
        <div className="purple_color_overlay overlay-left">
          <img
            className="project_page_piece_image"
            src={require("./Images/Black_dog.JPG")}
          />
          <div className="project_page_piece_info left_oriented_project">
            <p className="project_page_piece_materials">
              oil & charcoal - 16 x 16
            </p>
            <h2 className="project_page_piece_title">ROCKY</h2>
            <button className="project_page_piece_button">
              click for more details
            </button>
          </div>
        </div>
      </Link>
      <Link>
        <div className="beige_color_overlay overlay-right">
          <img
            className="project_page_piece_image"
            src={require("./Images/Two_dogs_playing.JPG")}
          />
          <div className="project_page_piece_info right_oriented_project">
            <p className="project_page_piece_materials">
              oil & charcoal - 3 x 24
            </p>
            <h2 className="project_page_piece_title">PABLO & BRANDY</h2>
            <button className="project_page_piece_button">
              click for more details
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Pasadena_pups;
