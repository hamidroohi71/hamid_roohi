import React, { component } from "react";
import "./introduction.css";
import MyButton from "../myButton";
import SkillBar from "./skillBar";

function History() {
  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="history col-10">
        <div className="historyParts">
          <p>
            My first familiarity with programming and computer science is back
            to 2006 when I was a school boy and for spending a good summer I
            attend a Robotic Summer class at a small academy. I love the
            algorithm course and I feel very good when I made my way throug a
            well designed algorithm as a solution to a specific problem. The
            year after that I continued the course and I joined a Robocup team
            and attend in Iran Open Robocup game - 2008. there was the end of my
            way in computer science in the high school days. I changed my field
            in the uiversity and started studding architecture.
            <br />
            Later in 2016 i need a website for my careee and for saving money I
            could not hire a developer so I started learning it myself and ten
            was my coming back point to programming. The Enjoyable sense of
            Nostalgia woke up in me and the Pleasure came to it's top by
            producing my first website. Since then I decided to protect this
            sense by being connected with this field by trying to became a web
            developer. Now I am more intent to select this way as my main way to
            the success, the way which I love it and can feel alive in that.
          </p>
          <MyButton text="Download CV" link="https://drive.google.com/file/d/1BqtpwTfaHlmTLyMnb8JZLIhzIUFZBa1m/view?usp=sharing" />
        </div>
        <div className="historyParts">
          <SkillBar />
        </div>
      </div>
      <div className="col-1"></div>
    </div>
  );
}

export default History;
