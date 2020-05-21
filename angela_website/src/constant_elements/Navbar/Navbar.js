import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './_Navbar.scss';

const Home_navbar = () => {

        const [open, setOpen] = useState(true);

    return (
        <Menu
            className={"burger"}
            isOpen={!open}
            right
            customBurgerIcon={ <img src={require('./burger_icon.PNG')}/> }
        >
            <div id="menu-container">
                <Link to="/projects" id="projects"><a>projects</a></Link>
                <Link to="/commissions" id="commissions"><a>commissions</a></Link>
                <Link to="/store" id="store"><a>store</a></Link>
                <Link to="/biography" id="biography"><a>biography</a></Link>
                <Link to="galleries" id="galleries"><a>galleries</a></Link>
            </div>
        </Menu>
    )
}

export default Home_navbar; 