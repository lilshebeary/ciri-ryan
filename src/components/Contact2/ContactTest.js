import styled from 'styled-components'
import { createGlobalStyle, css } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  
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
const sharedStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`

export const ContactContianer = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center; 
    background: #fff;
    height: 1000px;

    @media screen and (max-width: 800px) {
        height: 1000px;
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
    display: block;
    width: 100%;
    ${sharedStyles}

    &:focus {
    outline: 1px solid #00000c;
    }
   
`

export const ContactTextArea = styled.textarea`
   /* padding: 1em; */
   background-color: #eee;
   width: 100%;
   min-height: 100px;
   resize: none;
   ${sharedStyles}
    
   &:focus {
    outline: 1px solid #00000c;
    }
`
export const ContactButton = styled.button`
    display: block;
    width: 100px;
    border-radius: 5px;
    border: 1px solid #00000c;
    background: #219ebc;
    font-size: 1.2rem;
    color: #00000c;
    height: 40px;
    cursor: pointer;
    box-sizing: border-box;

    &:hover {
        color: #fff;
    }
`
/* export const ContactFieldset = styled.fieldset`
    border: 1px solid #ddd;
   font-weight: 800;
   margin: 0 0 40px 0;
   padding: 10px;
   margin: 20px 0;

    legend {
       padding: 0 10px;

   }
   label {
       padding-right: 20px;
   }
   input {
       margin-right: 10px;
   }
  
` */

export const ContactError = styled.div`
color: red;
`