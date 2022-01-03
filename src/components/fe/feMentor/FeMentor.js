import React from 'react';
import { Link } from "react-router-dom";
import "./FeMentor.css";
import FEMLogo from "./images/FrontendMentorLogo.png";
import FEMText from "./images/FrontendMentorText.png"

function FeMentor({ setRoute, text }) {

    const onLinkToMenu = (e) => {
        setRoute(text);
    }

    const onLinkToResource = (e) => {
        setRoute(e.target.text);
    }

    return (
        <div className="container--flex container__fementor">
        <div className="container--flex container__fementor--inner">
        <div className="container--flex container__fementor--left">
            <div className="container--flex container__fementor--img">
                <a className="fementor__link" href="https://www.frontendmentor.io/" target="_blank" rel="noreferrer" rel="noopener" >
                    <img src={FEMLogo} />
                </a>    
                <a className="fementor__link" href="https://www.frontendmentor.io/" rel="noreferrer" rel="noopener" target="_blank">
                    <img src={FEMText} />
                </a>
            </div>
        </div>
        <div className="container--flex container__fementor--right">
           <p className="para--frontendmentor">
            <a href="https://www.frontendmentor.io/" rel="noreferrer" rel="noopener" target="_blank" className='inline-link'>Frontend Mentor</a> is a service that provides 
            a user with a series of designs, accessible 
            via <a href="https://www.figma.com/" rel="noreferrer" rel="noopener" target="_blank" className='inline-link'>
            Figma</a>, which can be used to build frontend projects for your portfolio.
           </p>
           <p className="para--frontendmentor">
               It is has a low cost of £12 per month and is definitely worth the cost is you want to go
               into frontend development.
           </p>
        </div>
    </div>
    <div className="container--flex container__fementor--navlink"> 
        <Link to="/frontend" className='fementor-nav' onClick={onLinkToResource}>
            Frontend
        </Link>
        <Link to="/" className='fementor-nav' onClick={onLinkToMenu}>
            Menu
        </Link>
    </div>    
    </div>
    )
}

export default FeMentor;