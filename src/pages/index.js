import React, { useState } from "react";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import About from "../components/About";
import Footer from "../components/Footer";
import Skills from "../components/Skills/Skills";


const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Home />
      <Skills />
      <Portfolio />
      <About />
      <Footer />
    </>
  );
};

export default HomePage;
