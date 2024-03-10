import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="navbar-parent-container">
      <div className="left-navbar-container">OPCODE</div>

      <div className="right-navbar-container">
        <NavLink to="/projects" className="nav-link">
          Project
        </NavLink>
        <NavLink to="/sponsors" className="nav-link">
          Sponsors
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About Us
        </NavLink>

        <div className="register-button-container">
          <div className="register-button">Register</div>
          <div className="hover-color"> </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
