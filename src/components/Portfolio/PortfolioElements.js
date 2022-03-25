import styled from "styled-components";

export const PortfolioContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 1008px) {
    margin-top: 180px;
    height: 1200px;
  }
  @media screen and (max-width: 968px) {
    margin-top: 180px;
    height: 1200px;
  }
  @media screen and (max-width: 868px) {
    margin-top: 180px;
    height: 1200px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 500px;
    height: 1400px;
  }
  @media screen and (max-width: 580px) {
    margin-top: 500px;
    height: 1400px;
  }
`;

export const PortfolioWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const PortfolioCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 320px;
  padding: 30px;
  margin-left: 0.5em;
  margin-right: 0.5em;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const PortfolioIcon = styled.img`
  display: flex;
  justify-self: center;
  align-self: center;
  max-height: 110px;
  max-width: 130px;
  margin-bottom: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`;
export const PortfolioH1 = styled.h1`
  margin-top: 180px;
  font-size: 2rem;
  font-family: "Quicksand", sans-serif;
  color: #00000c;
  justify-self: center;
  padding-bottom: 0.3em;
  margin-bottom: 1em;

  @media screen and (max-width: 1000px) {
    font-size: 2rem;
    margin-top: 40px;
  }
  @media screen and (max-width: 900px) {
    font-size: 2rem;
    margin-top: 0px;
  }
  @media screen and (max-width: 800px) {
    font-size: 2rem;
    /* margin-top: 90px; */
  }
  @media screen and (max-width: 770px) {
    font-size: 2rem;
    /* margin-top: 10px; */
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
    /* margin-top: 0px; */
  }
`;
export const PortfolioH2 = styled.h2`
  font-size: 1.2rem;
  color: #00000c;
  margin-bottom: 1rem;
`;
export const PortfolioP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const PorfolioLink = styled.button`
  font-size: 1rem;
  color: #00000c;
  border-color: #2d93ad;
  outline: #2d93ad;
  text-decoration: none;
  &:hover {
    background: #2d93ad;
    color: #fff;
  }
  & a:hover {
    text-decoration: none;
    color: #fff;
  }
  & a {
    text-decoration: none;
  }
`;
