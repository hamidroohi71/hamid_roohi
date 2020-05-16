import React, { Component } from "react";
import "./portfolio.css";
import SingleProject from "./singleProject";
import novin from "./projects/novin.jpg";
import najafi from "./projects/najafi.jpg";
import hamid from "./projects/hamid.jpg";

function Projects() {
  return (
    <div >
      <div className="projects">
        <SingleProject img1={novin} alink="http://novincyclet.com/" date= "2018 Summer"/>
      </div>
      <div className="projects">
        <SingleProject img1={najafi} alink="http://hamidroohi.ir/najafi/" date="2020 Winter"/>
      </div>
      <div className="projects">
        <SingleProject img1={hamid} alink="http://hamidroohi.ir/" date="2020 Spring"/>
      </div>
    </div>
  );
}
export default Projects;
