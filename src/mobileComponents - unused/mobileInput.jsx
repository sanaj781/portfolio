import React from "react";
import { Link } from "react-router-dom";
import CV from "../imgs/CV ENG.pdf";

const MobileInputField = () => {
  return (
    <div className="input-field-wrapper">
      <div className="input-field-icons-wrapper">
        <a
          href="https://github.com/sanaj781"
          target="_blank"
          rel="noreferrer"
        ></a>
      </div>
      <div className="buttons-wrapper visible">
        <Link to="/projects">
          <div className="button">My Projects</div>
        </Link>

        <a href={CV} download>
          <div className="button">Curriculum Vitae</div>
        </a>
        <Link to="/main">
          <div className="button">Main</div>
        </Link>
      </div>
    </div>
  );
};

export default MobileInputField;
