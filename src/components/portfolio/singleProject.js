import React, { Component } from "react";
import "./portfolio.css";
import novin from "./projects/novin.jpg";

function SingleProject(props) {
  const mystyle = {
    display: "block",
    width: "80%",
    height: "200px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    marginBottom: "50px",
    color: "white",
    backgroundImage: `url(${props.img1})`,
  };
  return (
    <div className="singleProject" style={mystyle}>
      <span>
        <a>Novin Cyclet WebSite</a>
        <p>2018 Summer</p>
      </span>
    </div>
  );
}

export default SingleProject;
