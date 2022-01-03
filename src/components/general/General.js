import React from 'react';
import './General.css';
import { Link } from "react-router-dom";

function General( { route, setRoute, text }) {

    const onLinkToMenu = (e) => {
        setRoute(text);
    }

    const onLinkToResource = (e) => {
        setRoute(e.target.text);
    }


    return (
        <div className="container__flex container__general">
            <div className="container--flex container__general--inner">
                <div className="container--flex container__general--left">
                    <h3>Videos</h3>
                    <ul className="general__video--ul container--flex">
                        <li><a 
                        href="https://www.youtube.com/watch?v=tpIctyqH29Q&list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo" 
                        rel="noreferrer" 
                        rel="noopener" 
                        target="_blank"
                        >Crash Course Computer Science
                        </a></li>
                        <li><a 
                        href="https://www.youtube.com/watch?v=47NRaBVxgVM" 
                        rel="noreferrer" 
                        rel="noopener" 
                        target="_blank"
                        >Internet History, Technology, and Security
                        </a></li>
                        <li><a 
                        href="https://www.youtube.com/watch?v=oS-m5-XikwA" 
                        rel="noreferrer" 
                        rel="noopener" 
                        target="_blank"
                        >A Day in the Life of a Software Engineer in London
                        </a></li>
                    </ul>
                </div>
                
                <div className="container--flex container__general--center">
                    <h3>Articles</h3>
                    <ul className="general__article--ul container--flex">
                        <li><a 
                        href="https://www.globalmediainsight.com/blog/web-development-trends/" 
                        rel="noreferrer" 
                        rel="noopener" 
                        target="_blank"
                        >23 Latest Web Dev Trends
                        </a></li>
                        <li><a 
                        href="https://www.mycodingplace.com/post/what-is-an-algorithm-and-why-are-they-important" 
                        rel="noreferrer" 
                        rel="noopener" 
                        target="_blank"
                        >What Is An Algorithm and Why Are They Important
                        </a></li>
                        <li><a 
                        href="https://github.com/kamranahmedse/developer-roadmap" 
                        rel="noreferrer" 
                        rel="noopener" 
                        target="_blank"
                        >Developer Roadmaps
                        </a></li>
                    </ul>
                </div>
                <div className="container--flex container__general--right">
                    <h3>Resources</h3>
                    
                    <ul className='general__resources--ul container--flex'>
                        <Link to="/general/codewars" onClick={onLinkToResource}>
                            Codewars
                        </Link>
                    </ul>
                    
                </div>
            </div>
            <div className="container--flex container__general--navlink"> 
                <Link to="/" className="nav-link" onClick={onLinkToMenu}>
                    Menu
                </Link>
            </div>    
        </div>
    )
}

export default General