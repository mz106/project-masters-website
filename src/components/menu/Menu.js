import React from 'react';
import "./Menu.css";
import { Link } from 'react-router-dom';



function Menu(  { route, setRoute, about, general}) {

    const onLink = (e) => {
        setRoute(e.target.text)
        console.log(e.target.text)
      }

    return (
        <div className="container--flex container__menu">
            <nav className="container--flex menu__nav">
                <Link to="/about" className="nav-link" onClick={onLink} >
                    About
                </Link>
                <Link to="/general" className="nav-link" onClick={onLink} >
                    General
                </Link>
                <Link to="/frontend" className="nav-link" onClick={onLink}>
                    Front End
                </Link>
                <Link to="/backend" className="nav-link" onClick={onLink}>
                    Back End
                </Link>
                <Link to="/interview" className="nav-link" onClick={onLink}>
                    Interview
                    
                </Link>
            </nav>
        </div>
    )
}

export default Menu