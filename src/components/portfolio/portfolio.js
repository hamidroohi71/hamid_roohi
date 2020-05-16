import React, { component } from "react";
import "./portfolio.css";
import PortfolioTitle from "./portfolioTitle";
import Projects from "./projects";

function Portfolio() {
  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="portfolio col-10">
        <PortfolioTitle />
        <Projects />
      </div>
      <div className="col-1"></div>
    </div>
  );
}

export default Portfolio;
