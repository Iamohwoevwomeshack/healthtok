import React from "react";
import blog1 from "../assets/images/blog-1.svg";
import blog2 from "../assets/images/blog-2.svg";
import blog3 from "../assets/images/blog-3.svg";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-container-2">
        <h1>Our Latest Blog</h1>
        <div>
          <div className="blog-container-3">
            <img src={blog1} alt="" />
            <div>
              <h3>WHAT YOU SHOULD KNOW ABOUT DIABETES</h3>
              <h4>
                Many of us have heard of the illness called “Diabetes". Some of
                us may have come across persons who had diabetes as...
                <Link>Learn More</Link>
              </h4>
              <p>Mar 01, 2024</p>
            </div>
          </div>
          <div className="blog-container-3">
            <img src={blog2} alt="" />
            <div>
              <h3>AN INTRODUCTION TO MENTAL HEALTH</h3>
              <h4>
                Mental health, mental health, mental health. What exactly is
                mental health?, Is it so important?, how do I care for my mental
                ...
                <Link>Learn More</Link>
              </h4>
              <p>Feb 27, 2024</p>
            </div>
          </div>
          <div className="blog-container-3">
            <img src={blog3} alt="" />
            <div>
              <h3>UNDERSTANDING AND MANAGING PTSD</h3>
              <h4>
                Pete was a veteran who has served in the armed force, having
                served there, he has seen and encountered terrible things during
                his time. He had trouble...
                <Link>Learn More</Link>
              </h4>
              <p>Feb 28, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
