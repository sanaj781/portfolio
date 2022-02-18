import React, { useState } from "react";

const MyProjects = (props) => {
  const { Arboleda, Offside, Calculator, Shop } = props;
  const projects = [
    {
      title: Calculator,
      link: "https://sanaj781.github.io/3Dprinter-calculator/",
      class: "project-img-nonhovered",
      description: "React 3D printer cost calculator",
    },
    {
      title: Shop,
      link: "https://web-create.pl/",
      class: "project-img-nonhovered",
      description: "Php&MySQL e-shop",
    },

    {
      title: Offside,
      link: "https://offside.com.ua/",
      class: "project-img-nonhovered",
      description: "Football News",
    },
    {
      title: Arboleda,
      link: "https://arboleda.pl",
      class: "project-img-nonhovered",
      description: "Arboleda",
    },
  ];
  return (
    <React.Fragment>
      <div className="row">
        {projects.map((project) => (
          <div key={project.title} className="project-wrapper">
            <a href={project.link} target="_blank" rel="noreferrer">
              <div className="description">{project.description}</div>

              <img className={project.class} src={project.title} alt="" />
            </a>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default MyProjects;
