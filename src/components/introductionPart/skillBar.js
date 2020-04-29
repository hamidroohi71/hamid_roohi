import React, { Component } from "react";
import "./skillBar.css";

function SkillBar() {
  return (
    <div class="container">
      <h4>HTML</h4>
      <div class="bar advanced"></div>
      <h4>CSS</h4>
      <div class="bar back advanced"></div>
      <h4>Java Script</h4>
      <div class="bar back intermediate"></div>
      <h4>ReactJS</h4>
      <div class="bar front intermediate"></div>
    </div>
  );
}

export default SkillBar;
