import React from 'react';
import { Link } from "react-router-dom";
import CCDjangoLogo from './images/codecademylogo.png';
import "./CcDjango.css";


function CcDjango({ setRoute, text }) {

    const onLinkToMenu = (e) => {
        setRoute(text);
    }

    const onLinkToResource = (e) => {
        setRoute(e.target.text);
    }

    return (
        <div className="container--flex container__ccdjango">
        <div className="container--flex container__ccdjango--inner">
        <div className="container--flex container__ccdjango--left">
            <div className="container--flex container__ccdjango--img">
                <a className="ccdjango__link" href="https://www.codecademy.com/learn/paths/build-python-web-apps-with-django" rel="noreferrer" rel="noopener" target="_blank">
                    <img src={CCDjangoLogo} />
                </a>    
            </div>
        </div>
        <div className="container--flex container__ccdjango--right">
           <p className="para--ccdjango">
            <a href="https://www.codecademy.com/learn/paths/build-python-web-apps-with-django" rel="noreferrer" rel="noopener" target="_blank" className='inline-link'>Codecademy</a> is a service that provides 
            a user with many courses on different languages - Python, Java, C# and more. 
           </p>
           <p className="para--ccdjango">
               Django is a Python framework, allowing for the building of a backend for a website. Perfect
               if you want to put your new found skills to the test in a different language!
           </p>
        </div>
    </div>
    <div className="container--flex container__ccdjango--navlink"> 
        <Link to="/backend" className='ccdjango-nav' onClick={onLinkToResource}>
            Backend
        </Link>
        <Link to="/" className='ccdjango-nav' onClick={onLinkToMenu}>
            Menu
        </Link>
    </div>    
    </div>
    )
}

export default CcDjango;