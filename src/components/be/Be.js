import React from 'react';
import { Link } from "react-router-dom";
import "./Be.css";

function Be() {
    return (
        <div className="container--flex container__be">
            <div className="container--flex container__be--inner">
            <div className="container--flex container__be--left">
                <h3>Videos</h3>
                <ul className="be__video--ul container--flex">
                    <li><a 
                    href="https://www.youtube.com/watch?v=Oe421EPjeBE" 
                    rel="noreferrer" 
                    rel="noopener" 
                    target="_blank"
                    >Node.js and Express.js - Full Course
                    </a></li>
                    <li><a 
                    href="https://www.youtube.com/watch?v=9zUHg7xjIqQ" 
                    rel="noreferrer" 
                    rel="noopener" 
                    target="_blank"
                    >Learn Docker - DevOps with Node.js & Express
                    </a></li>
                    <li><a 
                    href="https://www.youtube.com/watch?v=oBt53YbR9Kk" 
                    rel="noreferrer" 
                    rel="noopener" 
                    target="_blank"
                    >Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges
                    </a></li>
                </ul>
            </div>
            <div className="container--flex container__be--center">
                <h3>Articles</h3>
                <ul className="be__articles--ul container--flex">
                <li><a 
                    href="https://www.codecademy.com/article/back-end-architecture" 
                    rel="noreferrer" 
                    rel="noopener" 
                    target="_blank"
                    >Back-End Web Architecture
                    </a></li>
                    <li><a 
                    href="https://www.researchgate.net/publication/243781001_A_Comparative_Analysis_of_Entity-Relationship_Diagrams" 
                    rel="noreferrer" 
                    rel="noopener" 
                    target="_blank"
                    >A Comparative Analysis of Entity-Relationship Diagrams


                    </a></li>
                    <li><a 
                    href="https://data-notes.co/the-10-operating-system-concepts-software-developers-need-to-remember-480d0734d710" 
                    rel="noreferrer" 
                    rel="noopener" 
                    target="_blank"
                    >The 10 Operating System Concepts Software Developers Need to Remember
                    </a></li>
                </ul>
            </div>
            <div className="container--flex container__be--right">
                <h3>Resources</h3>
                <ul className="be__resources--ul container--flex">
                    <li>
                        <Link to="/backend/ccdjango">
                            Codecademy Django
                        </Link>
                    </li>
                </ul>
            </div>
            
        </div>
        <div className="container--flex container__be--navlink"> 
            <Link to="/">
                Menu
            </Link>
        </div>    
        </div>
    )
}

export default Be