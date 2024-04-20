import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const HomeHero = () => {
  return (
    <div className="home-hero-container">
      <h1>Exceptional Healthcare for Humanity</h1>
      <p>
        Connect with our healthcare providers anytime, anywhere. Healthcare
        should be accessible to everyone, regardless of their location or
        circumstances.
      </p>
      <div>
        <p>Get Started</p>
        <div className="hero-link-arrow">
          <Link className="hero-link" to="/">
            About Us <FaArrowRightLong className="hero-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
