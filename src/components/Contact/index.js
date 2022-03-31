import React, { useState } from "react";
import "./Contact.scss"
import {
  GlobalStyle,
  ContactContianer,
  ContactWrapper,
  ContactForm,
  ContactInput,
  ContactTextArea,
  ContactFieldset,
  ContactButton,
  ContactError
  
 } 
from './ContactElements';


const initialState = {
  name: "",
  email: "",
  message: "",
};
let i = 0;
let txt = 'This is a static website, please contact me on LinkedIn';
let speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  
  }
}
const Contact = () => {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  // };
  // const handleInput = (e) => {
  //     const inputName = e.currentTarget.name;
  //     const value = e.currentTarget.value;

  //     setState(prev => ({ ...prev, [inputName]: value}))
  // };

  return (
    <>
      <GlobalStyle />
      <ContactContianer id='contact'>
      <ContactWrapper>
        <ContactForm>
          <h2>Message Me</h2>
          <label htmlFor="name">Name</label>
          <ContactInput
              type="text"
              name="name"
              value={state.name}
              onChange={typeWriter}
            />
            <label htmlFor="email">Email</label>
            <ContactInput
              type="email"
              name="email"
              value={state.email}
              onChange={typeWriter}
            />

            <label htmlFor="message">Message</label>
            <ContactTextArea
              id='demo'
              name="message"
              type="text"
              value={state.message}
              onChange={typeWriter}
            >
              
            </ContactTextArea>

           {error && (
              <ContactError>
              <p>{error}</p>
              </ContactError>
            )}

          <ContactButton type="button" onClick={typeWriter}>Send</ContactButton>
        </ContactForm>
      </ContactWrapper>
      </ContactContianer>
    </>
  );
};

export default Contact;
