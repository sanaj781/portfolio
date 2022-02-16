import React, { Component } from "react";

import "./App.css";
import Messages from "./modules/animated-messanger";
import MyProjects from "./modules/projects";
import { Route, Routes, useLocation } from "react-router-dom";
import MySkills from "./modules/skills";
import attachmentIcon from "./imgs/atachmentIcon.svg";
import smileIcon from "./imgs/smileIcon.svg";
import GitHubLogo from "./imgs/GitHub-Mark.svg";
import CV from "./imgs/CV ENG.pdf";
import { Link } from "react-router-dom";
import { matchPath } from "react-router-dom";

class App extends Component {
  state = {
    inputValue: "Click here to start...",
    inputDisabled: false,
    messagesTyped: false,
    messages: [
      {
        message: "Hi there! Welcome to my Portfolio Page!",
        class: "message-body ",
        key: 1,
        date: "",
      },
      {
        message:
          "I am a Front-End developer and I am inviting you to check out my projects",
        class: " message-body ",
        key: 2,
        date: "",
      },
    ],
  };

  handleFocusInput = () => {
    //clear and disabling the input field and
    let inputDisabled = this.state.inputDisabled;
    let inputValue = this.state.inputValue;

    inputValue = "";
    inputDisabled = true;

    this.setState({ inputValue, inputDisabled });

    const handleTyping = () => {
      //function which start typing mesaages
      let i = 0;
      let date;
      const messages = [...this.state.messages];
      let messageBySymbols;
      const startTyping = (id) => {
        //splitting message into symbols for animation
        messageBySymbols = messages[id].message.split("");

        //Typing animation
        const typingInterval = setInterval(() => {
          if (i < messageBySymbols.length) {
            inputValue += messageBySymbols[i];
            if (inputValue.length === 1) {
              //scrolling to the input field to
              document
                .getElementsByClassName("message-input-field-area")[0]
                .scrollIntoView(false);
            }
            i += 1;
            this.setState({ inputValue });
          }
          //When message has typed
          else {
            //getting a current date and time
            date = new Date();
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

            messages[id].class += "not-hidden-message";
            clearInterval(typingInterval);
            //Post a message
            inputValue = "";
            this.setState({ inputValue, messages });
            i = 0;

            if (id < messages.length - 1) {
              id += 1;
              startTyping(id);
            } else {
              let messagesTyped = this.state.messagesTyped;
              messagesTyped = true;
              this.setState({ messagesTyped });
            }
          }
        }, 40);
      };

      startTyping(0);
    };
    handleTyping();
  };
  handleChangeInput = (e) => {};
  // usePageView() {
  //   const matchLocation = useLocation();
  //   if (matchLocation === "#/projects") {
  //     console.log(matchLocation);
  //     console.log("big");
  //   }
  // }
  render() {
    let MessagerWrapper = "mesanger-output-area";
    let MessagerOutpuArea = "messanger-area";
    let ReactFragmentStartSign = "ReactFragmentStartSign noselect";
    let ReactFragmentEndSign = "ReactFragmentEndSign noselect";
    let mainSignClass = "main-sign noselect";
    let buttonsWrapperClass = "buttons-section ";
    if (this.state.inputDisabled === true) {
      MessagerWrapper += " not-hidden";
      MessagerOutpuArea += " backgorund-white bordered";
      ReactFragmentStartSign += " not-hidden";
      ReactFragmentEndSign += " not-hidden";
      mainSignClass = "hidden";
      if (this.state.messagesTyped === true) {
        buttonsWrapperClass += "not-hidden-message";
        MessagerOutpuArea += " wide height-auto";
        ReactFragmentStartSign = " hidden";
        ReactFragmentEndSign += " hidden";
      }
    }
    return (
      <React.Fragment>
        <div className="app">
          <div className="GitHubLogo">
            <a
              href="https://github.com/sanaj781"
              target="_blank"
              rel="noreferrer"
            >
              <img className="github-icon" src={GitHubLogo} alt="" />
              <br />
              GitHub
            </a>
          </div>
          <div className={MessagerOutpuArea}>
            <div className={mainSignClass}>
              Denys`s Shevchenko
              <br /> Portfolio Page
            </div>
            <div id="message-area" className={MessagerWrapper}>
              <Routes>
                <Route
                  exact
                  path="/"
                  element={<Messages messages={this.state.messages} />}
                />
                <Route path="/projects" element={<MyProjects />} />{" "}
                <Route path="/skills" element={<MySkills />} />
              </Routes>
            </div>
            <div className={buttonsWrapperClass}>
              <Link to="/projects">
                <div className="button">My Projects</div>
              </Link>
              <Link to="/skills">
                <div className="button">My Skills</div>
              </Link>
              <a href={CV}>
                <div className="button">Curriculum Vitae</div>
              </a>
              <Link to="/">
                <div className="button">Main</div>
              </Link>
            </div>
            <div className={ReactFragmentStartSign}>&lt;React.Fragment&gt;</div>
            <div className={ReactFragmentEndSign}>&lt;/React.Fragment&gt;</div>

            <div className="message-input-field-area">
              <img src={attachmentIcon} alt="" />
              <img className="icon" src={smileIcon} alt="" />
              <input
                disabled={this.state.inputDisabled}
                type="text"
                value={this.state.inputValue}
                onFocus={this.handleFocusInput}
                onChange={this.handleChangeInput}
                className="message-input-field"
              ></input>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
