import React from "react";
import bg from "../../images/cr-logo.svg";
import "./Home.scss";
import { HomeContainer } from "./HomeElements";
import { BsChevronDoubleDown } from "react-icons/bs";
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
        <h1 className="heroAboutText">Hello! I'm a Web & Mobile Developer</h1>

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
      <ScrollLink
        to="skills"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-80}
        className="moreContentChevron"
      >
        <BsChevronDoubleDown size={25} />
      </ScrollLink>
    </HomeContainer>
  );
};

export default Home;
