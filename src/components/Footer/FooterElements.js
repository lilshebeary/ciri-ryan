import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #0b3142;
  padding: 8rem 1rem;

  @media screen and (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

export const FooterContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const FooterSocials = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-bottom: 0 2rem;
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
  margin-bottom: 2em;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 0;

  @media screen and (max-width: 1000px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 900px) {
    font-size: 2rem;
    margin-top: 0px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 4rem;
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
