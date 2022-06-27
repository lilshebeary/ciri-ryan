import React from "react";
import bg from "../../images/cr-logo.svg";
import "./Home.scss";
import { HomeContainer } from "./HomeElements";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";
const Home = () => {
  return (
    <HomeContainer>
      <div className="App">
        <section>
          <img
            className="heroImage"
            src={bg}
            alt="javascript, react-native, react, node, express, rest api"
          ></img>
        </section>
        <div className="heroAboutTextContainer">
          <h1 className="heroAboutText">Hello! I'm a Web & Mobile Developer</h1>
        </div>
        <hr className="btm-hr" />

        <div className="social">
          <a
            href="https://www.linkedin.com/in/ciri-ryan-150a571a0/"
            title="linkedin"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/lilshebeary" title="github">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://codepen.io/lilshebeary" title="codepen">
            <i className="fa-brands fa-codepen"></i>
          </a>
        </div>
      </div>
    
    </HomeContainer>
  );
};

export default Home;
