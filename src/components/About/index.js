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
              I am a mobile and web developer located in the Greater Seattle
              area and I am currently completing my Associate's degree in
              Software Development while working part-time on a mobile-app
              startup.
            </AboutP>
            <AboutP>
              I have 3 years (includes in college and working on an app)
              experience with Javascript, HTML, CSS, React, React-Native NodeJS,
              and ExpressJS. I have some experience in MongoDB.
            </AboutP>
            <AboutP>
              I am hard working, motivated, and excited to continue to learn and
              grow as a developer.
            </AboutP>
          </AboutContent>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
