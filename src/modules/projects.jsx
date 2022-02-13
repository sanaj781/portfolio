import Arboleda from "../imgs/arboleda.png";
import Calculator from "../imgs/calculator.png";
import Shop from "../imgs/shop.png";
import Offside from "../imgs/offside.png";
import React, { Component } from "react";
import { Link } from "react-router-dom";
class MyProjects extends Component {
  state = {
    projects: [
      {
        title: Shop,
        link: "https://web-create.pl/",
        class: "project-img-nonhovered",
        description: "php & MySQL shop on Bootstrap",
      },
      {
        title: Calculator,
        link: "https://sanaj781.github.io/3Dprinter-calculator/",
        class: "project-img-nonhovered",
        description: "React 3D printer cost calculator",
      },

      {
        title: Offside,
        link: "https://offside.com.ua/",
        class: "project-img-nonhovered",
        description: "Football news",
      },
      {
        title: Arboleda,
        link: "https://arboleda.pl",
        class: "project-img-nonhovered",
        description: "One-page web-site for a company",
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="noselect">
          <Link to="/">
            <span className="back">Portfolio Page</span>{" "}
          </Link>{" "}
          - My Projects
        </h1>
        <div className="row">
          {this.state.projects.map((project) => (
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
  }
}

export default MyProjects;
