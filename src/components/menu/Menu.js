import React from 'react';
import "./Menu.css";
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className="container--flex container__menu">
            <nav className="container--flex menu__nav">
                <Link to="/about" className="nav-link">
                    About
                </Link>
                <Link to="/general" className="nav-link">
                    General
                </Link>
                <Link to="/frontend" className="nav-link">
                    Front End
                </Link>
                <Link to="/backend" className="nav-link">
                    Back End
                </Link>
                <Link to="/interview" className="nav-link">
                    Interview
                </Link>
            </nav>
        </div>
    )
}

export default Menu