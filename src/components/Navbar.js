import React from "react";
//import { Link, NavLink, withRouter } from "react-router-dom";
import "../css/navbar.css";
const Navbar = props => {
  return (
    <header>
      <nav>
        <div className="logo">
          <a>Solider</a>
        </div>
        <ul className="menu">
          <li>
            <a href="#">O nas</a>
          </li>
          <li>
            <a href="#">Usługi</a>
          </li>
          <li>
            <a href="#">Porfolio</a>
          </li>
          <li>
            <a href="#" className="contact-link">
              Kontakt
            </a>
          </li>
        </ul>
        <div className="menu-icon">
          <span />
          <span />
          <span />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
