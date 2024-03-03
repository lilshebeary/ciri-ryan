import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #0b3142;
  padding: 4rem 1rem;

  @media screen and (max-width: 768px) {
    padding: 3rem 1rem 4rem .6rem;
  }
  @media screen and (max-width: 468px) {
    padding: 3rem 1rem 4rem .6rem;
    max-height: 420px;
  }

`;

export const FooterContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
 
`;

export const FooterSocials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around
  ;
  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
 
`;
export const a = styled.a`
  margin: 3rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #f0f9ff;
  justify-self: center;
  text-align: center;
  margin-bottom: 2em;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 2rem;

 
  @media screen and (max-width: 700px) {
    font-size: 2.2rem;
    margin-top: 0px;
  }

 
`;

export const ContactText = styled.p`
  font-size: 1.8rem;
  color: #f0f9ff;
  justify-self: center;
  text-align: center;
  padding-bottom: 0.3em;
  margin-bottom: 2.5rem;
`;
