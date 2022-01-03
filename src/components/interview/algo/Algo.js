import React from 'react';
import { Link } from "react-router-dom";
import "./Algo.css";
import algoLogo from './images/algoLogo.png';


function Algo() {
    return (
        <div className="container--flex container__algo">
        <div className="container--flex container__algo--inner">
        <div className="container--flex container__algo--left">
            <div className="container--flex container__algo--img">
                <a className="algo__link" href="https://www.frontendmentor.io/" rel="noreferrer" rel="noopener" target="_blank">
                    <img src={algoLogo} />
                </a>    
            </div>
        </div>
        <div className="container--flex container__algo--right">
           <p className="para--algo">
            <a href="https://www.algoexpert.io/product" rel="noreferrer" rel="noopener" target="_blank" className='inline-link'>AlgoExpert </a>  
            is a website that provides a series of questions designed to prepare a candidate for coding interviews with FANG companies, as 
            well as others. It is a paid resource, but well worth it if you want to see what skills tech companies hold in high regard.
           </p>
        </div>
    </div>
    <div className="container--flex container__algo--navlink"> 
        <Link to="/interview" className='algo-nav'>
            Interview
        </Link>
        <Link to="/" className='algo-nav'>
            Menu
        </Link>
    </div>    
    </div>
    )
}

export default Algo;