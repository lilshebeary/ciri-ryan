import styled from 'styled-components'
import { createGlobalStyle, css } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    /* html {
        height: 80vh;
    } */
    body {
        font-family: 'Quicksand', sans-serif;
        /* background: #fff; */
        margin: 0;
        /* color: #00000c; */
        width: 100vw;
    }
    legend {
        margin: 1em;
    }
    label {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: .1em;
    }
`;

export const ContactContianer = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center; 
    background: #fff;
    height: 1400px;

    @media screen and (max-width: 800px) {
        height: 1400px;
    }

`
export const ContactWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
`


export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    border: 1px solid #00000c;
    border-radius: 5px;
    margin: 5em;
    margin-top: 370px;
    padding: 3em;
    width: 800px;
   box-shadow: 2 0 .2 .2;
    @media screen and (max-width: 800px) {
        width: 500px;
    }
    @media screen and (max-width: 550px) {
        width: 380px;
        
    }
    
`
export const h2 = styled.h2`
    display: flex;
    justify-self: center;
    align-self: center;
    margin-left: 2em;
    margin-right: 2em;
`

export const ContactInput = styled.input`
   padding: 1em;
    width: 340px;
    height: 40px;

    @media screen and (max-width: 550px) {
        width: 280px;
        
    }
`

export const ContactTextArea = styled.textarea`
   padding: 1em;
    
`
export const ContactButton = styled.button`
   width: 100px;
    border-radius: 30px;
    border: 1px solid #00000c;
    background: #219ebc;
    font-size: 1.2rem;

    &:hover {
        color: #fff;
    }
`
export const ContactFieldset = styled.fieldset`
       
  
`
export const ContactError = styled.div`
   
    
`



/* 
export const ContactH1 = styled.h1`
    display: flex;
    align-self: center;
    margin-top: 200px;
    color: #00000c;

    @media screen and (max-width: 800px) {
        margin-top: 250px;
    }
` */