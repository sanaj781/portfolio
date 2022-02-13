import React, { Component } from "react";
import avatar from "../imgs/avatar.jpg";
import attachmentIcon from "../imgs/atachmentIcon.svg";
import smileIcon from "../imgs/smileIcon.svg";
import GitHubLogo from "../imgs/GitHub-Mark.svg";
import CV from "../imgs/CV ENG.pdf";
import { Link } from "react-router-dom";
class Messanger extends Component {
  state = {
    inputValue: "Click here to start...",
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
    inputDisabled: false,
  };

  handleFocusInput = () => {
    //clear and disabling the input field and
    let inputValue = this.state.inputValue;
    let inputDisabled = this.state.inputDisabled;
    inputValue = "";
    inputDisabled = true;

    this.setState({ inputValue, inputDisabled });

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
          }
        }
      }, 40);
    };

    startTyping(0);
  };

  handleChangeInput = (e) => {};
  render() {
    let messageOutputAreaClassName = "mesanger-output-area";
    let messangerAreaClassName = "messanger-area";
    let ReactFragmentStartSign = "ReactFragmentStartSign noselect";
    let ReactFragmentEndSign = "ReactFragmentEndSign noselect";
    let mainSignClass = "main-sign noselect";
    if (this.state.inputDisabled === true) {
      //scrolling to the input field to
      document
        .getElementsByClassName("message-input-field-area")[0]
        .scrollIntoView(false);

      messageOutputAreaClassName += " not-hidden";
      messangerAreaClassName += " backgorund-white bordered";
      ReactFragmentStartSign += " not-hidden";
      ReactFragmentEndSign += " not-hidden";
      mainSignClass = "hidden";
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
          <div className={messangerAreaClassName}>
            <div className={mainSignClass}>
              Denys`s Shevchenko Portfolio Page
            </div>
            <div id="message-area" className={messageOutputAreaClassName}>
              {this.state.messages.map((message) => (
                <div key={message.key} className={message.class}>
                  <img src={avatar} alt="avatar" className="img-avatar" />
                  <div className="name-text-message">
                    <div className="user-name">
                      <div className="name"> Denys</div>
                      <div className="date">{message.date}</div>
                    </div>
                    <div>{message.message}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="buttons-section">
              <Link to="/projects">
                <div className="button button-one">My Projects</div>
              </Link>
              <Link to="/skills">
                <div className="button button-middle">My Skills</div>
              </Link>
              <a href={CV}>
                <div className="button button-last">Curriculum Vitae</div>
              </a>
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

export default Messanger;
