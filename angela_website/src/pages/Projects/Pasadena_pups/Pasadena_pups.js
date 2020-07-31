import React from "react";
import Home_navbar from "../../../constant_elements/Navbar/Navbar";
import { Link } from "react-router-dom";
//images of dogs
import FinleyImage from "./Images/Finley.JPG"
import RockyImage from "./Images/black_dog.JPG"
import Pablo_Brandy_Image from "./Images/Two_dogs_playing.JPG"

const Pasadena_pups = () => {
  return (
    <div className="main-container" id="projects-container">
      <div className="nav-container">
        <p>
          <Link id="logo" to="/">
            ANGELA CONTRERAS
          </Link>
        </p>
      </div>
      <Home_navbar />
      <p className="page-title">PASADENA PUPS</p>
      <Link to="/finley">
        <div className="beige_color_overlay overlay-right">
          <img
            className="project_page_piece_image"
            src={FinleyImage}
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
            src={RockyImage}
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
            src={Pablo_Brandy_Image}
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
