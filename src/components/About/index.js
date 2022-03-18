import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  AboutP,
  AboutH1,
  AboutDiv,
  AboutContent
} from "./AboutElements";

const About = () => {
  return (
    <>
      <AboutContainer id='about'>
        <AboutWrapper>
          <AboutContent>
            <AboutH1>Junior Software Developer</AboutH1>
            <AboutP>Currently residing in the Greater Seattle area
            
              while completing my Assocites degree in Software Development.
              <br></br>
              </AboutP>
            <AboutP>
              I have 3 years experience with Javascript, HTML, CSS, React,
              React-Native
           
              NodeJS, and ExpressJS. I have some experience in MongoDB. SwiftUI
              and AWS coming soon.
              </AboutP>
              <AboutP>
              I am a hard working and motivated, a big thinker, and excited to
              continue to learn
            </AboutP>
          </AboutContent>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
