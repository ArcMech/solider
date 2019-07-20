import React from "react";
//import { Link, NavLink, withRouter } from "react-router-dom";
import "../css/navbar.css";
const Navbar = props => {
  return (
    <nav className="navbar d-flex justify-content-end">
      <a href="#">O firmie</a>
      <a href="#">Usługi</a>
      <a href="#">Nasze prace</a>
      <a href="#">Kontakt</a>
    </nav>
  );
};

export default Navbar;
