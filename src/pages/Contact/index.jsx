import React, { createElement, useState } from "react";
import "./style.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = `mailto:kuma18@uw.edu?subject=React%20portfolio%20contact%20me%20from%20name:%20${name}&body=from%20email:%20${email}%0A%0Amessage%0A${message}`;
    link.click();
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  }

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const onMessageChange = (e) => {
    setMessage(e.target.value);
  }

  return (
    <>
      <form className="needs-validation" onSubmit={submitForm}>
        <div className="mb-3">
          <label for="nameFormInput" className="form-label">Name</label>
          <input type="text" className="form-control" id="nameFormInput" name="name" value={name} placeholder="name" onChange={onNameChange} required />
        </div>
        <div className="mb-3">
          <label for="emailFormInput" className="form-label">Email address</label>
          <input type="email" className="form-control" id="emailFormInput" name="email" value={email} placeholder="name@example.com" onChange={onEmailChange} required />
        </div>
        <div className="mb-3">
          <label for="messageFormTextarea" className="form-label">Message</label>
          <textarea className="form-control" id="messageFormTextarea" rows="3" name="message" value={message} placeholder="message" onChange={onMessageChange} required></textarea>
        </div>
        <button className="btn btn-primary" type="submit" value="Submit">Submit</button>
      </form>
    </>
  );
}

export { ContactForm };
