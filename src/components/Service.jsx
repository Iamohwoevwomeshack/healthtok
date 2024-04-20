import React from "react";
import { serviceData1, serviceData2 } from "./serviceData";
import doc1 from "../assets/images/doctor-1.svg";
import doc2 from "../assets/images/doctor-2.svg";
import doc3 from "../assets/images/doctor-3.svg";

const Service = () => {
  return (
    <div className="home-services">
      <h1>Our Services</h1>
      <div className="home-services-container">
        <div>
          {serviceData1.map((item) => (
            <div className="home-services-container2">
              <img className="home-services-img" src={item.serviceImg} alt="" />
              <div className="home-services-content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          {serviceData2.map((item) => (
            <div className="home-services-container2">
              <img className="home-services-img" src={item.serviceImg} alt="" />
              <div className="home-services-content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="doctors-container">
        <h2>Our Doctors</h2>
        <div className="doctors-container2">
          <div>
            <img src={doc1} alt="" />
            <div className="doctors-container3">
              <h4>Dr Kharyl Garcia</h4>
              <p>(MD, Philippine)</p>
            </div>
          </div>
          <div>
            <img src={doc2} alt="" />
            <div className="doctors-container3">
              <h4>Dr Edwin Ohwofasa</h4>
              <p> (BDS, Nigeria)</p>
            </div>
          </div>
          <div>
            <img src={doc3} alt="" />
            <div className="doctors-container3">
              <h4>Professor Friday Okonofua </h4>
              <p>(Professor in Gynaecology and Obstetrics, Nigeria)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
