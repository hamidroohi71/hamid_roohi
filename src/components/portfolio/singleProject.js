import React, { Component } from "react";
import "./portfolio.css";
import novin from "./projects/novin.jpg";

function SingleProject(props) {
  const mystyle = {
    
    backgroundImage: `url(${props.img1})`,
  };
  return (
    <div className="singleProject" style={mystyle}>
      <span>
        <a href= {props.alink}>Novin Cyclet WebSite</a>
        <p>{props.date}</p>
      </span>
    </div>
  );
}

export default SingleProject;
