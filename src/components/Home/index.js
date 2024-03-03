import React from "react";
import "./Home.scss";
import { HomeContainer } from "./HomeElements";

const Home = () => {
  return (
    <HomeContainer>
      <div className="App">
        <section className="flex-container">
          <div className="heroAboutTextContainer">
            <h2 class="title">
              <span class="title-word title-word-1">Hello! </span>
              <span class="title-word title-word-2"> I am a </span>
              <span class="title-word title-word-3">Web </span>
              <span class="title-word title-word-4">& </span>
              <span class="title-word title-word-5">Mobile </span>
              <span class="title-word title-word-6">Developer</span>
            </h2>
          </div>
        </section>
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
