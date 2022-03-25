import React from "react";
import { FooterContainer, FooterWrapper } from "./FooterElements";
// import '../../App.css';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/ciri-ryan-150a571a0/"
            title="linkedin"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/lilshebeary" title="github">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://codepen.io/lilshebeary" title="codepen">
            <i class="fa-brands fa-codepen"></i>
          </a>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
