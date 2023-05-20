import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #f0f9ff;
  display: flex;
  padding: 2em;
  margin: auto;
  justify-content: center;
 
`;

export const AboutDiv = styled.div`
  height: 2em;
  background: grey;
  margin-bottom: 2em;

`;
export const AboutWrapper = styled.div`
  margin: 8rem auto;
  justify-content: center;
  max-width: 1000px;

  @media screen and (max-width: 768px) {
    margin: 4rem 2rem;
  }
`;
export const AboutContent = styled.div`
  justify-self: center;
  text-align: flex-start;

`;
export const AboutH1 = styled.h2`
  text-align: center;
  margin-bottom: 2em;

  font-size: 2rem;
  color: #0c4a6e;

  @media screen and (max-width: 768px) {
    margin-bottom: 4rem;
  }
`;

export const AboutP = styled.p`
  font-size: 1.5em;
  color: #0c4a6e;
  display: block;
  margin-bottom: 0;
  & + & {
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }

`;
