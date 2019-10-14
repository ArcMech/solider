import React from "react";
import Image from "../img/about-small.jpg";
//import { Link, NavLink, withRouter } from "react-router-dom";
import "../css/about.css";
const About = props => {
  return (
    <section className="about">
      <div className="container">
        <div className="img-container">
          <img src={Image} alt="" />
        </div>
        <div className="info-container">
          <div className="text-wrapper">
            <h2>O nas</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem, earum eius recusandae adipisci qui incidunt
              corporis laborum veniam accusamus! Dicta nobis nihil reiciendis,
              perferendis excepturi corrupti autem ullam beatae fuga?
            </p>
          </div>
          <div className="button-wrapper">
            <button>Portfolio</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
