import React, { useState } from "react";
import "./style.css";
import { Project } from "../../components/Project";

const projects = [
  {
    title: "Project 1",
    desc: "MERN",
    imageUrl: "https://placekitten.com/300/150",
  },
  {
    title: "Project 2",
    desc: "MERN",
    imageUrl: "https://placekitten.com/300/150",
  },
  {
    title: "Project 3",
    desc: "MERN",
    imageUrl: "https://placekitten.com/300/150",
  },
  {
    title: "Project 4",
    desc: "MERN",
    imageUrl: "https://placekitten.com/300/150",
  },
  {
    title: "Project 5",
    desc: "MERN",
    imageUrl: "https://placekitten.com/300/150",
  },
  {
    title: "Project 6",
    desc: "MERN",
    imageUrl: "https://placekitten.com/300/150",
  },
];

function Portfolio() {
  return (
    <div className="project-div">
      {projects.map((project) => <Project title={project.title} desc={project.desc} imageUrl={project.imageUrl} />)}
    </div>
  );
}

export { Portfolio };
