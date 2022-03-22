import React, { useState } from "react";
// import './contact.php'
import {
  GlobalStyle,
  ContactContianer,
  ContactWrapper,
  ContactForm,
  ContactInput,
  ContactTextArea,
  //   ContactFieldset,
  ContactButton,
  ContactError,
  // from './ContactElements';
} from "./ContactTest";

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
      <ContactContianer id="contact">
        <ContactWrapper>
          <ContactForm onSubmit={handleSubmit}>
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
            />

            {error && (
              <ContactError>
              <p>Error message here</p>
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
