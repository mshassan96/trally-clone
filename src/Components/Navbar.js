import { React } from "react";
import NavBar from "react-bootstrap/Navbar";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <NavBar className="navbar" style={{}}>
      <div className="container container-navbar">
        <a href="/" className="logo-link">
          <img src={logo} alt="logo" className="brand-logo" />
        </a>
        <nav className="nav-links">
          <div className="nav-link">
            Explore Now{" "}
            <span style={{ verticalAlign: "sub" }}>
              <IoIosArrowDown />
            </span>
          </div>
          <div className="nav-link">
            Trally Academy{" "}
            <span style={{ verticalAlign: "sub" }}>
              <IoIosArrowDown />
            </span>
          </div>
          <a href="/career" className="nav-link">
            Career
          </a>
          <a href="/be-a-host" className="nav-link">
            Be a Host
          </a>
          <a href="/blog" className="nav-link">
            Blog
          </a>
          <a href="/host-portal/home" className="nav-link">
            Host Portal
          </a>
          <a href="http://app.trally.com" className="button nav-link-btn">
            Go to App
          </a>
        </nav>
        <div className="mobile-menu-icon">
          <FiMenu />
        </div>
      </div>
    </NavBar>
  );
};

export default Navbar;
