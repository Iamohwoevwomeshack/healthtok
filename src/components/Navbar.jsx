import React from "react";
import logo from "../assets/images/ht-logo.png";
import { MdSettingsPhone } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-container-2">
        <div className="navbar-links">
          <img src={logo} alt="logo" />
          <div>
            <ul>
              <li className="nav-home">
                Home<div></div>
              </li>
              <li className="nav-blog">Blog</li>
              <li className="nav-doctors">Doctors</li>
              <li className="nav-appiontments">Appiontments</li>
              <li className="nav-about">About</li>
              <li className="nav-signup">Sign Up</li>
              <li className="nav-login">Login</li>
            </ul>
          </div>
        </div>

        <div className="nav-contact">
          <span className="nav-contact-1">
            <MdSettingsPhone className="phone-call" />
            (+234) 837-33923
          </span>
          <span className="nav-contact-us">Contact Us</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
