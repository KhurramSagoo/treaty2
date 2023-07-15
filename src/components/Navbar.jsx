import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import bar from "../assets/bars.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className={`navbar-logo ${isMobileMenuOpen ? "open" : "open"}`}>
        <img className="logo" src={logo} alt="" />
        <span className="brand">treaty</span>
      </div>
      <div className="navbar-menu">
        <a className={`navbar-link ${isMobileMenuOpen ? "" : "hide"}`} href="#">
          Home
        </a>
        <a className={`navbar-link ${isMobileMenuOpen ? "" : "hide"}`} href="#">
          About us
        </a>
        <a className={`navbar-link ${isMobileMenuOpen ? "" : "hide"}`} href="#">
          Services
        </a>
        <a className={`navbar-link ${isMobileMenuOpen ? "" : "hide"}`} href="#">
          Contact us
        </a>
      </div>
      <div className={`navbar-button ${isMobileMenuOpen ? "" : "hide"}`}>
        Login / Register
      </div>
      <div
        className={`navbar-toggle ${isMobileMenuOpen ? "hide" : ""}`}
        onClick={handleToggleMenu}
      >
        <span className="navbar-toggle-icon">
          {" "}
          <img src={bar} alt="" />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
