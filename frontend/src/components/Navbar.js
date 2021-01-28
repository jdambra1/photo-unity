import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logoCrop.jpg";
import "./nav.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navBar">
        <ul>
          <li>
            <img src={logo} alt="logo" className="logo"></img>
          </li>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about/">About</NavLink>
          </li>
          <li>
            <NavLink to="/competitions/">Competitions</NavLink>
          </li>
          <li>
            <NavLink to="/testimonials/">Testimonials</NavLink>
          </li>
          <li>
            <NavLink to="/contact/">Contact</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
