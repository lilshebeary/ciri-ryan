import styled from "styled-components";

export const FooterContainer = styled.div`
  
  background: #0b3142;
  height: 20vh;
`;
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around; 
  align-items: center;
  margin-right: 28rem;
  margin-left: 28rem;
  
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
