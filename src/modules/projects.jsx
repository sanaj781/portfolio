import React, { useEffect } from "react";
import "../css/projects.css";
import { imgs, projects } from "../export-data/projects";

const MyProjects = () => {
  //Preloading images

  const myProjects = projects;
  const myImgs = imgs;
  //Preloading images
  useEffect(() => {
    myImgs.forEach((img) => {
      const newImage = new Image();
      newImage.src = img;
      window[img] = newImage;
    });
  });

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
