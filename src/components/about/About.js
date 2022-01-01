import React from 'react';
import { NavLink } from 'react-router-dom';
import './About.css';

function About() {
    return (
        <div className="container--flex container__about">
            <div className="container--flex container__about--inner">
                <div className="container--flex container__about--left">
                    <h2 className="heading--about">About</h2>
                    <p className="para--about">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="container--flex container__about--right">
                    <h2>About</h2>
                    <p>lorem ipsum</p>
                </div>
            </div>   
            <div className="container--flex container__about--navlink"> 
                <NavLink to="/">
                    Menu
                </NavLink>
            </div>
        </div>
    )
}

export default About