import React from 'react';
import Home_navbar from '../../../constant_elements/Navbar/Navbar';
import { Link } from 'react-router-dom';

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
            <Home_navbar/>
            <p className="page-title">
                PASADENA PUPS
            </p>
            <div>
                <Link>
                    <div>
                    </div>
                    <img />
                    <div>
                        <p>
                            oil & charcoal - 3 x 24
                        </p>
                        <p>
                            FINLEY
                        </p>
                        <p>
                            click for more details
                        </p>
                    </div>    
                </Link>
            </div>
        </div>
    )
}

export default Pasadena_pups;
