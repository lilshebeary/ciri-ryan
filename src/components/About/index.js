import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  AboutP,
  AboutH1,
  AboutDiv,
  AboutContent,
} from "./AboutElements";

const About = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <AboutContent>
            <AboutH1>Software Developer</AboutH1>
            <AboutP>
              I am a software developer located in the Greater Seattle
              area. 
            </AboutP>
            <AboutP>
              I am open to front end work, building websites and mobile apps. 
              I have experience with Javascript, HTML, CSS, React, React-Native NodeJS,
              and ExpressJS, MongoDB, SQL, MySQL. <br/>I'm currently exploring and enjoying UX design.
            </AboutP>
           
          </AboutContent>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
