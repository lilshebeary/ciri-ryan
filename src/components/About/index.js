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
              I have 3 years (including attending college, <a href="https://nucamp.co?referral=RIPZ08" rel="nucamp" style={{ color: "#0c4af0", textDecoration: 'none' }}>NuCamp Front End Bootcamp</a>, and working on a React Native camera app, Udemy, freeCodeCamp, YouTube tutorials)
              experience with Javascript, HTML, CSS, React, React-Native NodeJS,
              and ExpressJS, MongoDB, SQL, MySQL. I am currently exploring and learning UX design.
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
