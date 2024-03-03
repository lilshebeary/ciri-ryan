import styled from 'styled-components';

export const HomeContainer = styled.div`
  background-color: #0b3142;
  font-family: 'Literata', serif;
  font-family: 'Roboto', sans-serif;
  font-family: 'Sorts Mill Goudy', serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin-top: 2rem;

  z-index: 1;

  @media screen and (max-width: 800px) {
    width: 100vw;
    max-height: 800px;
  }
  @media screen and (max-width: 468px) {
    width: 100vw;
    margin-top: .3rem;
    max-height: 600px; 
    
  }
`
