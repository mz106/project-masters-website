import React from 'react';
import "./Header.css";
import logo from "./images/longAllWhite.png";
import cnLink from "./images/Short blue orange.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';


function Header() {
    return (
        <div className="container--flex container__header">
            <div className="container--flex container__logo">
                <img className="cn-logo" src={logo} alt="Code Nation Logo" />
            </div>
            <div className="container--flex container__nav">
                <nav className="container--flex nav__header">
                    <ul className="container--flex container__nav--list">
                        <li><a href="https://wearecodenation.com/" rel="noreferrer" rel="noopener" target="_blank"><img src={cnLink} className="icon"/></a></li>
                        <li><a href="https://www.linkedin.com/company/wearecodenation" rel="noreferrer" rel="noopener" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icon linkedin-icon"/></a></li>
                        <li><a href="https://twitter.com/wearecodenation" rel="noreferrer" rel="noopener" target="_blank"><FontAwesomeIcon icon={faTwitter} className="icon twitter-icon"/></a></li>
                        <li><a href="https://www.youtube.com/channel/UCR_kDlhaWi2U68KXpVWxMsg" rel="noreferrer" rel="noopener" target="_blank"><FontAwesomeIcon icon={faYoutube} className="icon youtube-icon"/></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
};

export default Header;