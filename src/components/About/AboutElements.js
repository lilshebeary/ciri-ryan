import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #f0f9ff;
  /* height: 100vh; */
  display: flex;
  margin: 0 auto;

  /* align-items: center; */

  /* @media screen and (max-width: 868px) {
    margin-top: 580px;
    height: 1200px;
  }
  @media screen and (max-width: 580px) {
    margin-top: 580px;
    height: 1200px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 580px;
    height: 1600px;
  }
  @media screen and (max-width: 431px) {
    margin-top: 580px;
    height: 2000px;
  } */
`;
export const AboutDiv = styled.div`
  height: 2em;
  background: grey;
  margin-bottom: 2em;
`;
export const AboutWrapper = styled.div`
  /* margin-bottom: 80px;
  height: 80vh; */
  margin: 8rem auto;
  max-width: 1000px;

  @media screen and (max-width: 768px) {
    margin: 4rem 2rem;
  }
`;
export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* margin-left: 7em;
  margin-right: 7em;
  height: 80vh; */

  /* @media screen and (max-width: 968px) {
    margin-left: 2em;
    margin-right: 2em;
  }
  @media screen and (max-width: 568px) {
    margin-left: 1em;
    margin-right: 1em;
  }
  @media screen and (max-width: 468px) {
    margin-left: 1em;
    margin-right: 1em;
    padding-left: 1em;
    padding-right: 1em;
  } */
`;
export const AboutH1 = styled.h2`
  display: flex;
  justify-self: center;
  align-self: center;
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
