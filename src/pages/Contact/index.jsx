import React, { useState } from "react";
import "./style.css";

function ContactForm({ onFormSubmit }) {
  const [cForm, setCForm] = useState("");

  (e) => {
    e.preventDefault();

    onFormSubmit(cForm);
  };

  return (
    <>
      <form onSubmit={cForm}>
        <div className="mb-3">
          <label for="nameFormInput" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="nameFormInput"
            placeholder="name"
          />
        </div>
        <div className="mb-3">
          <label for="emailFormInput" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailFormInput"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label for="messageFormTextarea" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="messageFormTextarea"
            rows="3"
            placeholder="message"
          ></textarea>
        </div>
        <input className="btn btn-primary" type="submit" value="Submit">
          Submit
        </input>
      </form>
    </>
  );
}

export { ContactForm };
