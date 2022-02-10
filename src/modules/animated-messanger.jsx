import { leafOak, lightsHoliday } from "fontawesome";
import React, { Component } from "react";
import avatar from "../imgs/avatar.jpg";
class Messanger extends Component {
  state = {
    inputValue: "Click here to start...",
    messages: [
      {
        message: "Hi there! Welcome to my Portfolio Page!",
        class: "message-body ",
        key: 1,
      },
      {
        message:
          "I am a Front-End developer and I am inviting you to check out my projects",
        class: " message-body ",
        key: 2,
      },
    ],
    inputDisabled: false,
  };

  handleFocusInput = () => {
    //clear and disabling the input field and
    let inputValue = this.state.inputValue;
    let inputDisabled = this.state.inputDisabled;

    inputDisabled = true;
    inputValue = "";
    this.setState({ inputValue, inputDisabled });

    //function which start typing mesaages
    let i = 0;
    let id;

    const messages = [...this.state.messages];
    console.log(messages.length);
    let messageBySymbols = messages[0].message.split("");
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
          messages[id].class += "not-hidden";
          clearInterval(typingInterval);
          //Post a message
          inputValue = "";
          this.setState({ inputValue });
          i = 0;
          if (id < messages.length - 1) {
            id += 1;
            console.log(id);

            startTyping(id);
          }
        }
      }, 80);
    };

    startTyping(0);
  };

  handleChangeInput = (e) => {
    //   let inputValue = this.state.inputValue;
    //   inputValue = e.target.value;
    //   this.setState({ inputValue });
    //   document.querySelector("input").disable = "true";
  };
  //   handleBlurInput = () => {
  //     let inputValue = this.state.inputValue;
  //     if (inputValue === "") inputValue = "Write a message...";
  //     this.setState({ inputValue });
  //   };

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <h1> GitHub</h1>
        </div>

        <div className="messanger-area">
          <div id="message-area" className="mesanger-output-area">
            {this.state.messages.map((message) => (
              <div key={message.key} className={message.class}>
                <img src={avatar} alt="avatar" className="img-avatar" />
                <div className="name-text-message">
                  <div className="user-name">Denys</div>
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
          <div className="message-input-field-area">
            <input
              disabled={this.state.inputDisabled}
              type="text"
              value={this.state.inputValue}
              //   onBlur={this.handleBlurInput}
              onFocus={this.handleFocusInput}
              onChange={this.handleChangeInput}
              className="message-input-field"
            ></input>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Messanger;
