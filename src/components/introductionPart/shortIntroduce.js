import React, { component } from "react";
import "./introduction.css";

function ShortIntro() {
  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="shortIntro col-10">
        <p className="shortintro_p">SOME WORD'S ABOUT ME</p>
        <p>
          A willing Curious web developer which is greeedy to learn every needed
          knowledge in web programming.
        </p>
      </div>
      <div className="col-1"></div>
    </div>
  );
}

export default ShortIntro;
