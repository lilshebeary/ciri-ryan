import React, { useState } from "react";
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
  
} from "./ContactElements";

const Contact = () => {
  return (
    <>
      <GlobalStyle />
      <ContactContianer id='contact'>
      <ContactWrapper>
        <ContactForm>
          <h2>Message Me</h2>
          <label htmlFor="name">Name</label>
          <ContactInput type="text" name="name" />
          <label htmlFor="email">Email</label>
          <ContactInput type="email" name="email" />
          <ContactFieldset>
            <legend>Gender idenity</legend>
            <label>
              <input type="radio" value="female" name="gender" />
              female
            </label>
            <label>
              <input type="radio" value="man" name="gender" />
              male
            </label>
            <label>
              <input type="radio" value="non-binary" name="gender" />
              non-binary
            </label>
            <label>
              <input type="radio" value="transgender" name="gender" />
              non-binary
            </label>
            <label>
              <input type="radio" value="intersex" name="gender" />
              intersex
            </label>
            <label>
              <input type="radio" value="transgender" name="gender" />
              transgender
            </label>
            <label>
              <input type="radio" value="trans male" name="gender" />
              trans male
            </label>
            <label>
              <input type="radio" value="trans female" name="gender" />
              trans female
            </label>
            <label>
              <input type="radio" value="gender non-conforming" name="gender" />
              gender non-conforming
            </label>
            <label>
              <input type="radio" value='other' name="gender" />
              Other:
              <input type="text"  name="gender" />
            </label>
          </ContactFieldset>
          <ContactFieldset>
            <legend>Pronouns</legend>
            <label>
              <input type="checkbox" value="she, her, hers" name="pronouns" />
              she, her, hers
            </label>
            <label>
              <input type="checkbox" value="he, him, his" name="pronouns" />
              he, him, his
            </label>
            <label>
              <input
                type="checkbox"
                value="they, them, theirs"
                name="pronouns"
              />
              they, them, theirs
            </label>
            <label>
              <input type="checkbox" value="sie, hir, hirs" name="pronouns" />
              sie, hir, hirs
            </label>
            <label>
              <input type="checkbox" value="other" name="pronouns" />
              Other:
              <input type="text" name="pronouns" />
            </label>
          </ContactFieldset>
          <label htmlFor="message">Message</label>
          <ContactTextArea name="message" />
          <ContactError>
            <p>Error message here</p>
          </ContactError>
          <ContactButton type="submit">Send</ContactButton>
        </ContactForm>
      </ContactWrapper>
      </ContactContianer>
    </>
  );
};

export default Contact;
