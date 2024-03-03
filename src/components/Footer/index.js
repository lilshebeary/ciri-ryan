import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterSocials,
  ContactText,
  SectionTitle,
} from "./FooterElements";
import './footer.css';


const Footer = () => {
  return (
    <FooterContainer id="contact" className="footer">
      <FooterContent>
        <SectionTitle>Contact</SectionTitle>
        <ContactText>
          Want to get in touch? Drop me an email at{" "}
          <a href="mailto:cirijaye@gmail.com">cirijaye@gmail.com</a>
        </ContactText>

        <FooterSocials>
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
        </FooterSocials>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
