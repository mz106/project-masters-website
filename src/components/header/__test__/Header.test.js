import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../Header";
import cnLink from "../images/Short blue orange.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

describe("Test Header", () => { 
    test("Test img render", () => {
        render(<Header />);
        expect(screen.findByRole("heading"));
        screen.get
    });

    test("Does cn website link work links work", () => {
        // render(<Header />);
        render(<a href="https://wearecodenation.com/" rel="noreferrer" rel="noopener" target="_blank"><img src={cnLink} className="icon" data-test-id="cn"/></a>);
        
        expect(screen.getByRole('link')).toHaveAttribute('href', 'https://wearecodenation.com/');
    })
    test("Does linkedin link work", () => {
        render(<a href="https://www.linkedin.com/company/wearecodenation" rel="noreferrer" rel="noopener" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icon fa-icon"/></a>);
        
        expect(screen.getByRole('link')).toHaveAttribute('href', 'https://www.linkedin.com/company/wearecodenation');
    });

    test("Does twitter link work", () => {
        render(<a href="https://twitter.com/wearecodenation" rel="noreferrer" rel="noopener" target="_blank"><FontAwesomeIcon icon={faTwitter} className="icon fa-icon"/></a>);

        expect(screen.getByRole('link')).toHaveAttribute('href', 'https://twitter.com/wearecodenation');
    });

    test("Does youtube link work", () => {
        render(<a href="https://www.youtube.com/channel/UCR_kDlhaWi2U68KXpVWxMsg" rel="noreferrer" rel="noopener" target="_blank"><FontAwesomeIcon icon={faYoutube} className="icon fa-icon"/></a>);
    
        expect(screen.getByRole('link')).toHaveAttribute('href', 'https://www.youtube.com/channel/UCR_kDlhaWi2U68KXpVWxMsg');
    });
});