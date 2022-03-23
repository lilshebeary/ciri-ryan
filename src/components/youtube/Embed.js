import React from "react";

const Embed = () => {
  return (
    <EmbedWrapper>
    <AboutContent>
            <AboutH1>Junior Software Developer</AboutH1>
            <AboutP>I am a mobile and web developer located in the Greater Seattle area
            
              and I am currently completing my Assocites degree in Software Development
              while working part-time on a mobile-app startup.
              </AboutP>
            <AboutP>
              I have 3 years experience with Javascript, HTML, CSS, React,
              React-Native
           
              NodeJS, and ExpressJS. I have some experience in MongoDB. SwiftUI
              and AWS coming soon.
              </AboutP>
              <AboutP>
              I am hard working and motivated, a big thinker, and excited to
              continue to learn and grow as a developer.
            </AboutP>
          </AboutContent>
      <iframe
        width="640"
        height="360"
        src="https://www.youtube.com/embed/YyGgqmIjR-M"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </EmbedWrapper>
  );
};

export default Embed;
