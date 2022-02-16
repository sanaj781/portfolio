import React, { useState } from "react";
import "./App.css";
import Messages from "./modules/animated-messanger";
import MyProjects from "./modules/projects";
import { Route, Routes, useLocation } from "react-router-dom";
import MySkills from "./modules/skills";

import GitHubLogo from "./imgs/GitHub-Mark.svg";
import CV from "./imgs/CV ENG.pdf";
import { Link } from "react-router-dom";

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

  const currentLocation = useLocation().pathname;
  const handleTyping = () => {
    if (currentLocation !== "/projects") {
      const startTyping = (id) => {
        //splitting message into symbols for animation
        let messageBySymbols = messages[id].message.split("");
        //Typing animation
        let i = 0;
        let newInputValue = "";

        const typingInterval = setInterval(() => {
          if (i < messageBySymbols.length) {
            newInputValue += messageBySymbols[i];
            if (newInputValue.length === 1) {
              //scrolling to the input field to
              document
                .getElementsByClassName("input-field-icons-wrapper")[0]
                .scrollIntoView({ behavior: "smooth", block: "start" });
            }
            i += 1;
            setInputValue(newInputValue);
          }
          //When message has typed
          else {
            //getting a current date and time
            let date = new Date();
            const minutes =
              date.getMinutes() < 10
                ? "0" + date.getMinutes()
                : date.getMinutes();
            messages[id].date =
              date.getDate() +
              " " +
              date.toLocaleString("default", { month: "long" }) +
              " " +
              date.getHours() +
              ":" +
              minutes;

            messages[id].class += " visible";

            clearInterval(typingInterval);
            //Post a message
            newInputValue = "";
            setInputValue(newInputValue);
            i = 0;

            if (id < messages.length - 1) {
              id += 1;
              startTyping(id);
            } else {
              setMessagesTyped(true);
            }
          }
        }, 40);
      };
      const myTimeout = setTimeout(() => startTyping(0), 1500);
    } else
      alert(
        "Oh, Sorry. I am working on fixing this problem. Make sure you are on the main page before reload! ;-)"
      );
  };

  let MainContent = "main-content";
  let RenderArea = "render-area";

  let signature = "signature noselect";
  let buttonsWrapper = "buttons-wrapper";
  let InputFieldText = "input-field-text";
  if (inputStatus === true) {
    MainContent += " backgorund-white";
    RenderArea += " visible flex-column render-area-height-transition";

    signature = "hidden";

    if (messagesTyped === true) {
      buttonsWrapper += " visible";
      MainContent += " width-full-screen-transition";
      InputFieldText = "hidden";

      if (currentLocation === "/projects") {
        MainContent = "main-content width-full-screen-transition";
      }
    }
  }

  return (
    <React.Fragment>
      <div className="app">
        <div className="main-content-wrapper">
          <div className={MainContent}>
            <div id="message-area" className={RenderArea}>
              <Routes>
                <Route
                  exact
                  path="/"
                  element={<Messages messages={messages} />}
                />
                <Route path="/projects" element={<MyProjects />} />{" "}
                <Route path="/skills" element={<MySkills />} />
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
                <Link to="/">
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
              Denys Shevchenko
              <br /> Portfolio Page
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
