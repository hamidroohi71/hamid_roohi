import React, { component } from "react";
import "./title.css";
import hamid from "./hamid.png";
import MyButton from "../myButton";

function TitlePart() {
  return (
    <div className="mainTitle">
      <div className=" nameTitles">
        <h4>Resume</h4>
        <h2>HAY! THERE</h2>
        <h1>I AM HAMID</h1>
        <h3>A WEB DEVELOPER</h3>
        <MyButton text="CONTACT ME" />
      </div>
      <div className="profilePic">
        <img src={hamid} />
      </div>
    </div>
  );
}
export default TitlePart;
