import React, { Component } from "react";
import avatar from "../imgs/avatar.jpg";
import attachmentIcon from "../imgs/atachmentIcon.svg";
import smileIcon from "../imgs/smileIcon.svg";
import GitHubLogo from "../imgs/GitHub-Mark.svg";
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
    let mesangerOutputArea = this.state.mesangerOutputArea;
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
          messages[id].date =
            "0" +
            date.getDay() +
            " " +
            date.toLocaleString("default", { month: "long" }) +
            " " +
            date.getHours() +
            ":" +
            date.getMinutes();

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
    if (this.state.inputDisabled === true) {
      messageOutputAreaClassName += " not-hidden";
      messangerAreaClassName += " backgorund-white";
    }
    return (
      <React.Fragment>
        <div className="app">
          <div className="GitHubLogo">
            <a href="https://github.com/sanaj781" target="_blank">
              <img className="github-icon" src={GitHubLogo} alt="" />
              GitHub
            </a>
          </div>

          <div className={messangerAreaClassName}>
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
              <button className="button-one">My Projects</button>
              <button className="button-middle">My Skills</button>
              <button className="button-last">Curriculum Vitae</button>
            </div>
            <div className="ReactFragmentStartSign">&lt;React.Fragment&gt;</div>
            <div className="ReactFragmentEndSign">&lt;/React.Fragment&gt;</div>

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
