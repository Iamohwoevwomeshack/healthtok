import React from "react";
import md from "../assets/images/md.png";
import md1 from "../assets/images/md-1.png";
import md2 from "../assets/images/md-2.png";
import md3 from "../assets/images/md-3.png";
import md4 from "../assets/images/md-4.png";
import whoweare from "../assets/images/who-are-we.svg";
import { Link } from "react-router-dom";

const HomeMain = () => {
  return (
    <div className="home-main">
      <div>
        <h3>How Can We Help You?</h3>
        <p>
          Stay informed about the latest research on HealthTok
          <span className="hero-main-contact">Contact Us</span>
        </p>
      </div>
      <hr />
      <div className="home-main-img-phone">
        <img src={md} alt="" />
      </div>
      <div className="home-main-img">
        <img src={md1} alt="" />
        <img src={md2} alt="" />
        <img src={md3} alt="" />
        <img src={md4} alt="" />
        <p>Book an Appiontment</p>
      </div>
      <hr />
      <div className="who-we-are-container">
        <img src={whoweare} alt="" />
        <div>
          <h3>Who are We</h3>
          <p>
            Healthtok is a telemedicine website and helps bridge the gap between
            healthcare professionals and patients.
          </p>
          <p>
            We prioritize the enhancement of your well-being through the
            utilization of cutting-edge technology and contemporary medical
            practices, carefully tailored for your convenience.
          </p>
          <p>
            Our healthcare platform delivers comprehensive services encompassing
            diagnostics, medication, therapy, and various additional provisions.
          </p>
          <Link className="who-we-are-about" to="/about">
            About Our Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
