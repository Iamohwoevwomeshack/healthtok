import React from "react";
import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import HomeMain from "../components/HomeMain";
import Hospital from "../components/Hospital";
import Service from "../components/Service";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
// import heroBg from "../assets/images/hero-bg.svg";

const Home = () => {
  return (
    <div>
      <div className="home-hero">
        <Navbar />
        <HomeHero />
      </div>
      <HomeMain />
      <Hospital />
      <Service />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
