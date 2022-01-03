import React from 'react';
import { Link } from "react-router-dom";
import codewarsLogo from "./images/codewarsLogo.png";
import "./Codewars.css";


function Codewars({ setRoute, text }) {

    const onLinkToMenu = (e) => {
        setRoute(text);
    }

    const onLinkToResource = (e) => {
        setRoute(e.target.text);
    }

    return (
        <div className="container--flex container__codewars">
        <div className="container--flex container__codewars--inner">
        <div className="container--flex container__codewars--left">
            <div className="container--flex container__ccdjango--img">
                <a className="codewars__link" href="https://www.codewars.com/" rel="noreferrer" rel="noopener" target="_blank">
                    <img src={codewarsLogo} />
                </a>    
            </div>
        </div>
        <div className="container--flex container__codewars--right">
           <p className="para--codewars">
            <a href="https://www.codewars.com/" rel="noreferrer" rel="noopener" target="_blank" className="inline-link nav-link">Codewars</a> is a great website for
            developing your coding skills. It is a free service where you complete exercise (called katas) of ever increasing difficulty. 
            Doing this often can solidify your existing knowledge, and cause you to seek out new ways of doing things. And it has exercises in 
            many different languages, so you can start to learn something right here, for free!
           </p>
        </div>
    </div>
    <div className="container--flex container__codewars--navlink"> 
        <Link to="/general" className='codewars-nav' onClick={onLinkToResource}>
            General
        </Link>
        <Link to="/" className='codewars-nav' onClick={onLinkToMenu}>
            Menu
        </Link>
    </div>    
    </div>
    )
}

export default Codewars;