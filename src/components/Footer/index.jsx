import React, { useState } from "react";
import "./style.css";

function Footer() {
  return (
    <>
      <a
        class="icon-link"
        href="https://github.com/fevercatdream"
        target="_blank"
        rel="noopener"
      >
        <img class="bi bi-github" aria-hidden="true" src="/images/github.svg" />
      </a>
      <a
        class="icon-link"
        href="https://www.linkedin.com/in/abi-kumagai-8646b531/"
        target="_blank"
        rel="noopener"
      >
        <img
          class="bi bi-linkedin"
          aria-hidden="true"
          src="/images/linkedin.svg"
        />
      </a>
      <a
        class="icon-link"
        href="https://stackoverflow.com/users/19540062/fevercatdream"
        target="_blank"
        rel="noopener"
      >
        <img
          class="bi bi-stack-overflow"
          aria-hidden="true"
          src="/images/stack-overflow.svg"
        />
      </a>
    </>
  );
}

export { Footer };
