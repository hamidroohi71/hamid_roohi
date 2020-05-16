import React, { component } from "react";
import "./button.css";


function MyButton(props) {
  return (
    <div>
      <button type="button" onClick= {()=> (window.open(`${props.link}`,"_self"))}>{props.text}</button>
    </div>
  );
}
export default MyButton;
