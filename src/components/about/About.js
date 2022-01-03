import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import aboutPic from './images/about.png';

function About({ route, setRoute, text }) {

    const onLinkToMenu = (e) => {
        setRoute(text);
      }

    return (
        <div className="container--flex container__about">
            <div className="container--flex container__about--inner">
                <div className="container--flex container__about--left">
                    <h2 className="heading--about">About</h2>
                    <p className="para--about">Welcome to the CodeNation post-Masters Bootcamp resource page! Here, you'll find a list of resources which you can use to
                        to practice and extend your skills. You'll find a number of links to resources on a number of topics, including frontend, backend and interviews! 
                        They should see you in good stead as your coding journey progressed. Enjoy!
                    </p>
                </div>
                <div className="container--flex container__about--right">
                    <img src={aboutPic} />
                </div>
            </div>   
            <div className="container--flex container__about--navlink"> 
                <Link to="/" className="nav-link" onClick={onLinkToMenu}>
                    Menu
                </Link>
            </div>
        </div>
    )
}

export default About