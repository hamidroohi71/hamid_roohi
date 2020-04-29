import React, { Component } from "react";
import "./portfolio.css";
import SingleProject from "./singleProject";
import novin from "./projects/novin.jpg";
import najafi from "./projects/najafi.jpg";
import hamid from "./projects/hamid.jpg";

function Projects() {
  return (
    <div>
      <div className="projects">
        <SingleProject img1={novin} />
      </div>
      <div className="projects">
        <SingleProject img1={najafi} />
      </div>
      <div className="projects">
        <SingleProject img1={hamid} />
      </div>
    </div>
  );
}
export default Projects;
