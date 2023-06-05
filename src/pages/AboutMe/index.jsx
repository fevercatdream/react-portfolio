import React, { useState } from "react";
import "./style.css";

function AboutMe({ sectionTitle }) {
  return (
    <>
      <h2>{sectionTitle}</h2>
      <img src="./images/abi-headshot.jpg" alt="headshot" />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae officiis
        facere, odio possimus exercitationem adipisci culpa cupiditate, laborum
        delectus consequatur repellat perferendis rerum, ut ullam sapiente
        doloremque hic repellendus expedita!
      </p>
    </>
  );
}

export { AboutMe };
