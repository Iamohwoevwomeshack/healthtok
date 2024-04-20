import React from "react";
import sponsor from "../assets/images/sponsor.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-2">
        <div>
          <h2>Sponsored by</h2>
          <img src={sponsor} alt="" />
        </div>
        <div className="footer-container-3">
          <h3>Contact Us</h3>
          <p>Call +123 456 7890</p>
          <p>healthtok@gmail.com</p>
          <p>Benin City Edo State</p>
        </div>
        <div className="footer-container-3">
          <h3>Quick Link</h3>
          <p>Blog</p>
          <p>Book Appiontment</p>
        </div>
        <div className="footer-container-3">
          <h3>Our Services</h3>
          <p>General Health</p>
          <p>Mental Health</p>
          <p>Reproductive Health</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
