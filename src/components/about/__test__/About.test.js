import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Routes, Route, BrowserRouter as Router, useLocation, Link } from 'react-router-dom';
import About from "../About.js"

describe("Test about", () => { 
    test("about renders", () => {
        render(
            <Router>
                <Routes>
                    <Route path="/about" element={<About />}/>
                </Routes>
            </Router>
        
        );

        expect(screen.findAllByText('About'));
        
    });
});