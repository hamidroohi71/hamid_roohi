import React, { Component } from "react";
import "./skillBar.css";

function SkillBar() {
  return (
    <div class="container">
      <h6>HTML</h6>
      <div class="bar advanced"></div>
      <h6>CSS</h6>
      <div class="bar back advanced"></div>
      <h6>Java Script</h6>
      <div class="bar back intermediate"></div>
      <h6>ReactJS</h6>
      <div class="bar front intermediate"></div>
    </div>
  );
}

export default SkillBar;
