import React, { useState } from "react";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Contact from "../components/Contact";
import About from "../components/About";
import Footer from "../components/Footer";
import Skills from "../components/Skills/Skills";
// // import Modal from '../components/Modal';

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
      {/* <Modal isOpen={isOpen} toggle={toggle} /> */}
      <About />
      <Footer />
    </>
  );
};

export default HomePage;
