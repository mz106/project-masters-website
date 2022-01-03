import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Footer.css";

function Footer({ route }) {
    
    return (
        <div className='container--flex container__footer'>
            <div className='container--flex container__footer--inner'>
                <p className='footer-text'>{route}</p>
            </div>
        </div>
    )
}

export default Footer
