import React from "react";
import { Link } from "react-router-dom";

const Hospital = () => {
  return (
    <div className="hospital-introduction">
      <div className="hospital-introduction-container">
        <h2>Hospital Introduction</h2>
        <div className="hospital-introduction-line" />
        <p>
          HealthTok is the bridge between medical professionals and patients,
          made possible by seamless technology. Our platform provides a wide
          range of health services, all available right at your fingertips. We
          make it easy to access the information and support you need, so you
          can take control of your health and feel your best. With HealthTok,
          the future of healthcare is truly within your reach.
        </p>
      </div>
      <div className="hospital-introduction-link">
        <div className="hospital-div">
          <Link className="hospital-link">Hospital Introdction</Link>
          <div className="hospital-link-span"></div>
        </div>
        <div className="hospital-div">
          <Link className="hospital-link">Mental Health</Link>
          <div className="hospital-link-span"></div>
        </div>
        <div className="hospital-div">
          <Link className="hospital-link">Reproductive Health</Link>
          <div className="hospital-link-span"></div>
        </div>
        <div className="hospital-div">
          <Link className="hospital-link">General Health</Link>
          <div className="hospital-link-span"></div>
        </div>
        <div className="hospital-blog">
          <Link className="hospital-link">Blog</Link>
        </div>
      </div>
    </div>
  );
};

export default Hospital;
