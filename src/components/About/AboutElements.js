import styled from "styled-components";

export const AboutContainer = styled.div`
    background: #9C92A3;
    margin-top: 300;
    height: 100vh;
    display: flex;
    
    
    /* align-items: center; */
    

    @media screen and (max-width: 868px) {
        margin-top:580px;
        height: 1200px;
    }
    @media screen and (max-width: 580px) {
        margin-top:580px;
        height: 1200px;
    }
    @media screen and (max-width: 500px) {
        margin-top:580px;
        height: 1600px;
    }
    @media screen and (max-width: 431px) {
        margin-top:580px;
        height: 2000px;
    }
`
export const AboutDiv = styled.div`
    height: 2em;
    background: grey;
    margin-bottom: 2em;
`
export const AboutWrapper = styled.div`
  margin-bottom: 80px;
    height: 80vh;

`
export const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 7em;
    margin-right: 7em;
    height: 80vh;

    @media screen and (max-width: 968px) {
        margin-left: 3em;
        margin-right: 3em;
    }

`
export const AboutH1 = styled.h1`
    display: flex;
    justify-self: center;
    align-self: center;
    margin-top: 7em;
    margin-bottom: 2em;
 
    font-size: 2.2rem;
    color: #00000C;
`

export const AboutP = styled.p`
  
    font-size: 1.5em;
    color: #00000C;
    margin-bottom: .5em;
    margin-left: 7em;
    margin-right: 7em;
   
    @media screen and (max-width: 868px) {
     margin-left: auto;
     margin-right: auto;
      
    }
    @media screen and (max-width: 480px) {
       
        margin-left: auto;
        margin-right: auto;
       
    }
    
`