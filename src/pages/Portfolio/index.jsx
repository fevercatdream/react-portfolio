import React, { useState } from "react";
import "./style.css";
import { Project } from "../../components/Project";

const projects = [
  {
    title: "Social Network API",
    desc: "JavaScript",
    imageUrl: "https://placekitten.com/300/150",
    url: "https://github.com/fevercatdream/social-network-api"
  },
  {
    title: "Tech Blog",
    desc: "JavaScript 🔸 Handlebars 🔸 CSS",
    imageUrl: "https://placekitten.com/300/150",
    url: "https://github.com/fevercatdream/tech-blog"
  },
  {
    title: "Employee Tracker",
    desc: "JavaScript",
    imageUrl: "https://placekitten.com/300/150",
    url: "https://github.com/fevercatdream/employee-tracker"
  },
  {
    title: "E-commerce Back End",
    desc: "JavaScript",
    imageUrl: "https://placekitten.com/300/150",
    url: "https://github.com/fevercatdream/e-commerce-back-end"
  },
  {
    title: "Note Taker",
    desc: "JavaScript 🔸 HTML 🔸 CSS",
    imageUrl: "https://placekitten.com/300/150",
    url: "https://github.com/fevercatdream/note-taker"
  },
  {
    title: "Weather Dashboard",
    desc: "JavaScript 🔸 HTML 🔸 CSS",
    imageUrl: "https://placekitten.com/300/150",
    url: "https://github.com/fevercatdream/weather-dashboard"
  },
];

function Portfolio() {
  return (
    <div className="project-div">
      {projects.map((project) => <Project title={project.title} desc={project.desc} imageUrl={project.imageUrl} url={project.url} />)}
    </div>
  );
}

export { Portfolio };
