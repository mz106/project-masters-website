import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import General from "../General";

describe("test General component", () => {
    test("test General renders", () => {
        render(<Router>
            <Routes>
                <Route path="/about" element={<General />}/>
            </Routes>
        </Router>);
    });

    test("check external links", () => {
        render(<a 
            href="https://www.globalmediainsight.com/blog/web-development-trends/" 
            rel="noreferrer" 
            rel="noopener" 
            target="_blank"
            >23 Latest Web Dev Trends
            </a>);
        render(<a 
            href="https://www.mycodingplace.com/post/what-is-an-algorithm-and-why-are-they-important" 
            rel="noreferrer" 
            rel="noopener" 
            target="_blank"
            >What Is An Algorithm and Why Are They Important
            </a>);
        render(<a 
            href="https://github.com/kamranahmedse/developer-roadmap" 
            rel="noreferrer" 
            rel="noopener" 
            target="_blank"
            >Developer Roadmaps
            </a>);
        expect(screen.getByText("23 Latest Web Dev Trends")).toHaveAttribute("href", "https://www.globalmediainsight.com/blog/web-development-trends/");
        expect(screen.getByText("What Is An Algorithm and Why Are They Important")).toHaveAttribute("href", "https://www.mycodingplace.com/post/what-is-an-algorithm-and-why-are-they-important");
        expect(screen.getByText("Developer Roadmaps")).toHaveAttribute("href", "https://github.com/kamranahmedse/developer-roadmap");
    });
});