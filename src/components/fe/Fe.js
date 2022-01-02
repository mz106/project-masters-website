import React from 'react';
import { Link } from "react-router-dom";
import FeMentor from './feMentor/FeMentor';
import "./Fe.css";

function Fe() {  
    return (
        <div className="container__flex container__fe">
        <div className="container--flex container__fe--inner">
            <div className="container--flex container__fe--left">
                <h3>Videos</h3>
                <ul className="container--flex fe__video--ul">
                <li><a 
                    href="https://www.youtube.com/watch?v=7YhdqIR2Yzo&list=PLxRVWC-K96b0ktvhd16l3xA6gncuGP7gJ" 
                    rel="noreferrer" 
                    rel="noopener" 
                    target="_blank"
                    >How Does React Actually Work? React.js Deep Dive #1
                    </a></li>
                    <li><a 
                    href="https://www.youtube.com/watch?v=NSWr6dkc_Xw&list=PL4-IK0AVhVjMsQyJM3oF1Ij2uoQ0sSDoE" 
                    rel="noreferrer" 
                    rel="noopener" 
                    target="_blank"
                    >3d CSS Animation
                    </a></li>
                    <li><a 
                    href="https://www.youtube.com/watch?v=D56hs0Twfco" 
                    rel="noreferrer" 
                    rel="noopener" 
                    target="_blank"
                    >Figma Course - Web Design Tutorial for Beginners
                    </a></li>
                </ul>
            </div>
            <div className="container--flex container__fe--center">
                <h3>Articles</h3>
                <ul className="container--flex fe__articles--ul">
                <li><a 
                    href="https://dev.to/thenerdydev/10-react-projects-every-beginner-should-try-fk9" 
                    rel="noreferrer" 
                    rel="noopener" 
                    target="_blank"
                    >8 React Projects Every Beginner Should Try
                    </a></li>
                    <li><a 
                    href="https://blog.logrocket.com/why-use-redux-reasons-with-clear-examples-d21bffd5835/" 
                    rel="noreferrer" 
                    rel="noopener" 
                    target="_blank"
                    >Why Use Redux?
                    </a></li>
                    <li><a 
                    href="https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/" 
                    rel="noreferrer" 
                    rel="noopener" 
                    target="_blank"
                    >How to Build a Custom Pagination Component in React
                    </a></li>
                </ul>
            </div>
            <div className="container--flex container__fe--right">
                <h3>Resources</h3>
                <ul className="container--flex fe__resources--ul">
                    <li>
                        <Link to="/fe/fementor">
                            Front End Mentor
                        </Link>
                    </li>
                    <li>    
                        {/* <NavLink to="/fe/hackdesign">
                            Hack Design
                        </NavLink> */}
                    </li>
                </ul>
            </div>
        </div>
        <div className="container--flex container__fe--navlink"> 
            <Link to="/">
                Menu
            </Link>
        </div>    
    </div>
    )
}

export default Fe