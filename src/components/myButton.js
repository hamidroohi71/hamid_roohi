import React, { component } from "react";
import "./button.css";

function MyButton(props) {
  return (
    <div>
      <button type="button ">{props.text}</button>
    </div>
  );
}
export default MyButton;
