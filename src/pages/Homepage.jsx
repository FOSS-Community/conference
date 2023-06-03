import React from "react";
import About from "../components/About";
import Code from "../components/Code";
import Community from "../components/Community";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import Schedule from "../components/Schedule";
import Sponsors from "../components/Sponsors";
import faqData from "../data/faqData.json";

const Homepage = () => {
  return (
    <div id="home">
      <Navbar />
      <Hero />
      <About />
      <Faq data={faqData} />
      <Code />
      <Community />
      <Sponsors />
      <Schedule />
      <Register />
      <Footer />
    </div>
  );
};

export default Homepage;
