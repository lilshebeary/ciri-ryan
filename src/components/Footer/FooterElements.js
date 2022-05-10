import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #0b3142;
  padding: 8rem 1rem;
`;

export const FooterContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const FooterSocials = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* margin-right: 28rem;
  margin-left: 28rem; */

  @media screen and (max-width: 1180px) {
    margin-left: 8rem;
    margin-right: 8rem;
  }
  @media screen and (max-width: 880px) {
    margin-left: 6rem;
    margin-right: 6rem;
  }

  @media screen and (max-width: 580px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }
`;
export const a = styled.a`
  margin: 3rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #f0f9ff;
  justify-self: center;
  text-align: center;
  padding-bottom: 0.3em;
  margin-bottom: 2em;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 0;

  @media screen and (max-width: 1000px) {
    font-size: 2rem;
    margin-top: 40px;
  }
  @media screen and (max-width: 900px) {
    font-size: 2rem;
    margin-top: 0px;
  }
`;

export const ContactText = styled.p`
  font-size: 1.4rem;
  color: #f0f9ff;
  justify-self: center;
  text-align: center;
  padding-bottom: 0.3em;
  margin-bottom: 3em;
`;
