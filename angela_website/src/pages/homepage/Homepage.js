import React from 'react';
import Home_navbar from '../../constant_elements/Navbar/Navbar';
import Footer from '../../constant_elements/Footer/Footer';

const Homepage = () => {
    return (
        <div className="main-container" id="home-container">
            <div id="home-menu">
                <Home_navbar />
            </div>
            <div id="hero-container">
                <div id="home-image-1">
                    <img src={require('./Two_dogs_in_sweaters_black_white_high.png')} alt="Two dogs in sweaters" />
                </div>
                <p id="hero-title">
                    ANGELA CONTRERAS
                </p>
                <p id="hero-sub">
                    ARTIST - PAINTER
                </p>
                <div id="home-image-2">
                    <img src={require('./Black_dog_black_white_tint.png')} alt="Black dog"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;
