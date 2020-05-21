import React from 'react'
import Home_navbar from '../../constant_elements/Navbar/Navbar';
import Footer from '../../constant_elements/Footer/Footer';
import { Link } from 'react-router-dom';

const Project_Overview = () => {
    return (
        <div className="main-container" id="project_overview-container">
            <div className="nav-container">
                <p>
                    <Link id="logo" to="/">
                        ANGELA CONTRERAS
                    </Link>
                </p>
            </div>
            <Home_navbar />
            <p className="page-title">
                PROJECTS
            </p>
            <div className="list-project" id="project-1">
                <Link to="/pasadena_pups">
                    <img src={require('./Images/White_dog_with_black_spots.JPG')} />
                    <p>
                        PASADENA PUPS
                    </p>
                </Link>
            </div>
            <div className="list-project" id="project-2">
                <Link to="/castles">
                    <img src={require('./Images/Yellow_Castle.JPG')} />
                    <p>
                        CASTLES
                    </p>
                </Link>
            </div>
            <br></br>
            <br></br>
            <Footer />
            <br>
            </br>
        </div>
    )
}

export default Project_Overview;
