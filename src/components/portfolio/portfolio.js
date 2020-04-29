import React, { component } from "react";
import "./portfolio.css";
import PortfolioTitle from "./portfolioTitle";
import Projects from "./projects";

function Portfolio() {
  return (
    <div className="portfolio">
      <PortfolioTitle />
      <Projects />
    </div>
  );
}

export default Portfolio;
