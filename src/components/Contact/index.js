import React, { useState } from "react";

import {
  GlobalStyle,
  ContactContianer,
  ContactWrapper,
  ContactForm,
  ContactInput,
  ContactTextArea,
  // ContactFieldset,
  ContactButton,
  ContactError
  
 } 
from './ContactElements';


const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {

  };
  const handleInput = (e) => {
      const inputName = e.currentTarget.name;
      const value = e.currentTarget.value;

      setState(prev => ({ ...prev, [inputName]: value}))
  };

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
              onChange={handleInput}
            />
            <label htmlFor="email">Email</label>
            <ContactInput
              type="email"
              name="email"
              value={state.email}
              onChange={handleInput}
            />

            <label htmlFor="message">Message</label>
            <ContactTextArea
              name="message"
              type="text"
              value={state.message}
              onChange={handleInput}
            >
              
            </ContactTextArea>

           {error && (
              <ContactError>
              <p>{error}</p>
              </ContactError>
            )}

          <ContactButton type="submit">Send</ContactButton>
        </ContactForm>
      </ContactWrapper>
      </ContactContianer>
    </>
  );
};

export default Contact;
