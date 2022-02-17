import React, { useLayoutEffect, useState } from "react";
import "./App.css";
import Messages from "./modules/animated-messanger";
import MyProjects from "./modules/projects";
import { Route, Routes, useLocation } from "react-router-dom";
import MySkills from "./modules/skills";
import MainPage from "./modules/MainPage";
import GitHubLogo from "./imgs/GitHub-Mark.svg";
import CV from "./imgs/CV ENG.pdf";
import { Link } from "react-router-dom";
import Arboleda from "./imgs/arboleda.png";
import Calculator from "./imgs/calculator.png";
import Shop from "./imgs/shop.png";
import Offside from "./imgs/offside.png";
import { startTyping } from "./functions/startTypeFunction";

const App = () => {
  const [messages] = useState([
    {
      message: "Hi there! Welcome to my Portfolio Page!",
      key: 1,
      class: "message-wrapper",
    },
    {
      message:
        "I am a Front-End developer and I am inviting you to check out my projects",
      key: 2,
      class: "message-wrapper",
    },
  ]);
  const [inputValue, setInputValue] = useState("Start typing to start...");
  const [inputStatus, setDisableStatus] = useState(false);
  const [messagesTyped, setMessagesTyped] = useState(false);
  const [windowWidth, setWindowWidth] = useState();
  const currentLocation = useLocation().pathname;
  useLayoutEffect(() => {
    function updateWidth() {
      setWindowWidth(window.innerWidth);
      setClassNames();
    }
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  });

  const handleTyping = () => {
    console.log("ss");
    if (currentLocation === "/" && windowWidth > 700) {
      //Wait till window resized
      const myTimeout = setTimeout(
        () => startTyping(0, messages, setInputValue, setMessagesTyped),
        650
      );
    } else {
      setMessagesTyped(true);
      setDisableStatus(true);
    }
  };

  let MainContent = "main-content";
  let RenderArea = "render-area";

  let signature = "signature noselect";
  let buttonsWrapper = "buttons-wrapper";
  let InputFieldText = "input-field-text";
  const setClassNames = () => {
    if (inputStatus === true) {
      MainContent += " backgorund-white";
      RenderArea += " visible flex-column render-area-height-transition";
      if (windowWidth > 700) signature = "hidden";

      if (messagesTyped === true) {
        buttonsWrapper += " visible";
        MainContent += " width-full-screen-transition";
        InputFieldText = "hidden";

        if (currentLocation !== "/") {
          signature = "hidden";
          MainContent = "main-content width-full-screen-transition";
        }
      }
    }
  };
  setClassNames();
  //Skip typing on mobile devices
  if (windowWidth <= 700 && messagesTyped === false) {
    handleTyping();
    for (let i = 0; i < messages.length; i++) {
      messages[i].class += " visible";
    }
  }

  return (
    <React.Fragment>
      <div className="app">
        <div className="main-content-wrapper">
          <div className={MainContent}>
            <div className={RenderArea}>
              <Routes>
                <Route path="/" element={<Messages messages={messages} />} />
                <Route
                  path="/projects"
                  element={
                    <MyProjects
                      Calculator={Calculator}
                      Shop={Shop}
                      Offside={Offside}
                      Arboleda={Arboleda}
                    />
                  }
                />{" "}
                {/* <Route path="/skills" element={<MySkills />} /> */}
                <Route path="/main" element={<MainPage />} />
              </Routes>
            </div>

            <div className="input-field-wrapper">
              <div className="input-field-icons-wrapper">
                <a href="https://github.com/sanaj781" target="_blank">
                  <img className="input-field-icon" src={GitHubLogo} alt="" />
                </a>
              </div>
              <div className={buttonsWrapper}>
                <Link to="/projects">
                  <div className="button">My Projects</div>
                </Link>
                {/* <Link to="/skills">
                  <div className="button">My Skills</div>
                </Link> */}
                <a href={CV} download>
                  <div className="button">Curriculum Vitae</div>
                </a>
                <Link to="/main">
                  <div className="button">Main</div>
                </Link>
              </div>
              <input
                disabled={inputStatus}
                type="text"
                value={inputValue}
                onFocus={() => {
                  setInputValue("");
                }}
                onChange={() => {
                  handleTyping();
                  setDisableStatus(true);
                }}
                className={InputFieldText}
              ></input>
            </div>

            <div className={signature}>
              <span>
                Denys Shevchenko
                <br /> Portfolio Page
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
