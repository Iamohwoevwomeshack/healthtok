import React, { useState } from "react";
import logo from "../assets/images/ht-logo.png";
import { MdSettingsPhone } from "react-icons/md";

const Navbar = () => {
  const [activeHam, setActiveHam] = useState(false);
  const menuItemss = (
    <>
      <a className="nav-home" href="/">
        Home
      </a>
      <a className="nav-blog" href="/">
        Blog
      </a>
      <a className="nav-doctors" href="/">
        Doctors
      </a>
      <a className="nav-appiontments" href="/">
        Appiontments
      </a>
      <a className="nav-about" href="/">
        About
      </a>
      <a className="nav-signup" href="/">
        Sign Up
      </a>
      <a className="nav-login" href="/">
        Login
      </a>
    </>
  );
  const menuItems = (
    <>
      <div>
        <a className="nav-home">
          Home<div></div>
        </a>
      </div>
      <div>
        <a className="nav-blog">Blog</a>
        <a className="nav-doctors">Doctors</a>
        <a className="nav-appiontments">Appiontments</a>
        <a className="nav-about">About</a>
        <a className="nav-signup">Sign Up</a>
        <a className="nav-login">Login</a>
      </div>
    </>
  );
  return (
    <div className="navbar-container">
      <div className="navbar-container-2">
        <button
          className={activeHam ? "hamburger active-hamburger" : "hamburger"}
          onClick={() => setActiveHam(!activeHam)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="navbar-links">
          <img src={logo} alt="logo" />
          <div className="menu">{menuItems}</div>
        </div>

        <div className="nav-contact">
          <span className="nav-contact-1">
            <MdSettingsPhone className="phone-call" />
            (+234) 837-33923
          </span>
          <span className="nav-contact-us">Contact Us</span>
        </div>
      </div>
      {activeHam && <div className="nav-dropdown">{menuItemss}</div>}
    </div>
  );
};

export default Navbar;
