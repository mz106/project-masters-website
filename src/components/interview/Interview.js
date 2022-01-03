import React from 'react';
import { Link } from "react-router-dom";
import "./Interview.css";

function Interview({ route, setRoute, text }) {

    const onLinkToMenu = (e) => {
        setRoute(text);
    }

    const onLinkToResource = (e) => {
        setRoute(e.target.text);
    }

    return (
        <div className="container--flex container__interview">
            <div className="container--flex container__interview--inner">
            <div className="container--flex container__interview--left">
                <h3>Videos</h3>
                <ul className='container--flex interview__resources--ul'>
                    <li><a 
                    href="https://www.youtube.com/watch?v=HYK5lpkKBPo" 
                    rel="noreferrer" 
                    rel="noopener" 
                    target="_blank"
                    >How I prepared for coding interviews
                    </a></li>
                    <li><a 
                    href="https://www.youtube.com/watch?v=KCm6JVtoRdo" 
                    rel="noreferrer" 
                    rel="noopener" 
                    target="_blank"
                    >Interview Questions and Answers!
                    </a></li>
                    <li><a 
                    href="https://www.youtube.com/watch?v=r1MXwyiGi_U" 
                    rel="noreferrer" 
                    rel="noopener" 
                    target="_blank"
                    >Top 10 Algorithms for the Coding Interview
                    </a></li>
                </ul>
            </div>
            <div className="container--flex container__interview--center">
                <h3>Articles</h3>
                <ul className='container--flex interview__resources--ul'>
                    <li><a 
                    href="https://www.codementor.io/blog/web-developer-interview-questions-3ey8yl7epg" 
                    rel="noreferrer" 
                    rel="noopener" 
                    target="_blank"
                    >19 Web Developer Interview Questions You Should Know
                    </a></li>
                    <li><a 
                    href="https://www.fullstack.cafe/blog/50-junior-web-developer-interview%20-questions-and-answers-ultimate-list-2018" 
                    rel="noreferrer" 
                    rel="noopener" 
                    target="_blank"
                    >Kill Your Tech Interview
                    </a></li>
                    <li><a 
                    href="https://www.codingdojo.com/blog/programming-interview-questions" 
                    rel="noreferrer" 
                    rel="noopener" 
                    target="_blank"
                    >How to Ace the Web Developer Job Interview
                    </a></li>
                </ul>
            </div>
            <div className="container--flex container__interview--right">
                <h3>Resources</h3>
                <ul className='container--flex interview__resources--ul'>
                    <li>
                        <Link to='/interview/algo' onClick={onLinkToResource}>
                            AlgoExpert
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="container--flex container__interview--navlink"> 
            <Link to="/" onClick={onLinkToMenu}>
                Menu
            </Link>
        </div>    
        </div>
    )
}

export default Interview