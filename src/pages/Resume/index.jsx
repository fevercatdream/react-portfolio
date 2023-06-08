import React, { useState } from "react";
import "./style.css";

function Resume() {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <br />
      <span>Download my <a href="images/cat-peeking-at-you.jpg" download="resume.jpg">resume</a></span>
      <br />
      <br />
      <h3>Front-end Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      <h3>Back-end Proficiencies</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB</li>
        </ul>
    </div>
  );
}

export { Resume };
