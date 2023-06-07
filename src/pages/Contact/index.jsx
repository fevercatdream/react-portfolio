import React, { useState } from "react";
import "./style.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="needs-validation" novalidate onSubmit={submitForm}>
        <div className="mb-3">
          <label for="nameFormInput" className="form-label">Name</label>
          <input type="text" className="form-control" id="nameFormInput" name="name" value={name} placeholder="name" />
        </div>
        <div className="mb-3">
          <label for="emailFormInput" className="form-label">Email address</label>
          <input type="email" className="form-control" id="emailFormInput" name="email" value={email} placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label for="messageFormTextarea" className="form-label">Message</label>
          <textarea className="form-control" id="messageFormTextarea" rows="3" name="message" value={message} placeholder="message"></textarea>
        </div>
        <button className="btn btn-primary" type="submit" value="Submit">Submit</button>
      </form>
    </>
  );
}

export { ContactForm };
