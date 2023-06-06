import React, { useState } from "react";
import "./style.css";

function Footer() {
  return (
    <footer>
      <a
        className="icon-link"
        href="https://github.com/fevercatdream"
        target="_blank"
        rel="noopener"
      >
        <img 
          id="github-id" 
          className="bi bi-github" 
          aria-hidden="true" 
          src="/images/github.svg" />
      </a>
      <a
        className="icon-link"
        href="https://www.linkedin.com/in/abi-kumagai-8646b531/"
        target="_blank"
        rel="noopener"
      >
        <img
          id="linkedin-id"
          className="bi bi-linkedin"
          aria-hidden="true"
          src="/images/linkedin.svg"
        />
      </a>
      <a
        className="icon-link"
        href="https://stackoverflow.com/users/19540062/fevercatdream"
        target="_blank"
        rel="noopener"
      >
        <img
          id="stack-overflow-id"
          className="bi bi-stack-overflow"
          aria-hidden="true"
          src="/images/stack-overflow.svg"
        />
      </a>
    </footer>
  );
}

export { Footer };
