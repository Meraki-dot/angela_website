import React from 'react';
import './_Footer.scss'

const Footer = () => {
    return (
        <div id="footer-container">
            <p id="copyright">
                © angela lee 2020
            </p>
            <div id="social-icons">
                <img src={require('./Icons/instagram.png')} alt="instagram icon" />
                <img src={require('./Icons/envelope.png')} alt="Email icon" />
            </div>
        </div>
    )
}

export default Footer;
