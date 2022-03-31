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
    height: 850px;

    @media screen and (max-width: 800px) {
        height: 900px;
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
    /* align-items: center; */
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
    /* display: block;
    width: 100%;
    ${sharedStyles} */
   padding: 1em;
    width: 340px;
    height: 40px;
    width: 100%;

    @media screen and (max-width: 550px) {
        width: 280px;
        
    }
    label {
        display: flex;
        align-self: start;
    }

    &:focus {
    outline: 1px solid #00000c;
    }
`

export const ContactTextArea = styled.textarea`
   padding: 1em;
   min-height: 100px;
   resize: none;
   width: 100%;
   &:focus {
    outline: 1px solid #00000c;
    }
`
export const ContactButton = styled.button`
    width: 100px;
    height: 40px;
    border-radius: 30px;
    border: 1px solid #00000c;
    background: #219ebc;
    font-size: 1.4rem;
    margin-top: 2em;
    align-self: end;

    &:hover {
        color: #fff;
    }
`
export const ContactFieldset = styled.fieldset`
    .typewriter h1 {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    animation: 
        typing 3.5s steps(40, end),
        blink-caret .75s step-end infinite;
}

       /* The typing effect */
    @keyframes typing {
    from { width: 0 }
    to { width: 100% }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: orange; }
    }
`

export const ContactError = styled.div`
   color: red;
   font-weight: 800;
   margin: 0 0 40px 0;
    
`


