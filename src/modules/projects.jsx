import React from "react";
import "../css/projects.css";
import { projects } from "../export-data/projects";

const MyProjects = () => {
  const myProjects = projects;

  return (
    <React.Fragment>
      <div className="row">
        {myProjects.map((project) => (
          <div key={project.description} className="project-wrapper">
            <a href={project.link} target="_blank" rel="noreferrer">
              <div className="description">{project.description}</div>

              <img className={project.class} src={project.imgSrc} alt="" />
            </a>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default MyProjects;
