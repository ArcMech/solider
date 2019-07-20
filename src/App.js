import React from "react";
import Navbar from "./components/Navbar";
import "./css/reset.css";
import Hero from "./img/hero.png";

function App() {
  return (
    <div className="App">
      <img src={Hero} alt="" className="img-fluid" />
      <Navbar />
    </div>
  );
}

export default App;
