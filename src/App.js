import React from "react";
import "./App.css";
import TitlePart from "./components/title/titlePart";
import ShortIntro from "./components/introductionPart/shortIntroduce";
import History from "./components/introductionPart/history";
import Portfolio from "./components/portfolio/portfolio";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <TitlePart />
      <ShortIntro />
      <History />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
