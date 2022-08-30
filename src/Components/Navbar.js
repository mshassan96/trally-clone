import React from "react";
import NavBar from "react-bootstrap/Navbar";
import "./Navbar.css";
import logo from "../Logo.svg";

const Navbar = () => {
  return (
    <NavBar className="navbar" style={{}}>
      <div className="container container-navbar">
        <a href="/" className="logo-link">
          <img src={logo} alt="logo" className="brand-logo" />
        </a>
        <nav>
          <a href="#" className="nav-link">
            Career
          </a>
          <a href="#" className="nav-link">
            Be a Host
          </a>
          <a href="#" className="nav-link">
            Blog
          </a>
          <a href="#" className="nav-link">
            Host Portal
          </a>
          <a href="http://app.trally.com" className="button nav-link-btn">
            Go to App
          </a>
        </nav>
      </div>
    </NavBar>
  );
};

export default Navbar;
