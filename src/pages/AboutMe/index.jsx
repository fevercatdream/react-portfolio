import React, { useState } from "react";
import "./style.css";

function AboutMe({ sectionTitle }) {
  return (
    <div className="about-me">
      <h2>{sectionTitle}</h2>
      <img src="./images/abi-headshot.jpg" alt="headshot" />
      <p>
        Learning to program, join me in my journey as I grow as a software developer.
      </p>
      <p>
        I enjoy learning about new technologies, and I am interested in the UX/UI experience. 
      </p>
    </div>
  );
}

export { AboutMe };
