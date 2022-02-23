import React, { useState, useContext } from "react";
import "../css/inputFieldArea.css";
import CV from "../imgs/CV ENG.pdf";
import GitHubLogo from "../imgs/GitHub-Mark.svg";
import { Link, useLocation } from "react-router-dom";
import { typingMessages } from "../functions/startTypeFunction";
import AnimationContext from "../Contexts/AnimationContext";
const InputFieldArea = () => {
  const [inputValue, setInputValue] = useState("Click here to start...");

  const animationContext = useContext(AnimationContext);
  const currentLocation = useLocation().pathname;
  const typingStatusUpdate = () =>
    animationContext.updateTypeStatusHandler("done");
  const handleTyping = () => {
    if (currentLocation === "/") {
      const messages = [...animationContext.messages];
      //Initiazing an update function for Context class changing and rerendering
      const udpateMessages = function () {
        animationContext.messageTypedHandler(messages);
      };

      //Callng a typing function
      setTimeout(
        () =>
          typingMessages(
            messages,
            setInputValue,
            udpateMessages,
            typingStatusUpdate
          ),
        2000
      );
    } else {
      typingStatusUpdate();
    }
  };

  return (
    <div className="input-field-wrapper">
      <div className="input-field-icons-wrapper">
        <a href="https://github.com/sanaj781" target="_blank" rel="noreferrer">
          <img className="input-field-icon" src={GitHubLogo} alt="" />
        </a>
      </div>
      <div className={animationContext.buttonsWrapperClass.value}>
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
      <input
        disabled={animationContext.inputFieldStatus}
        type="text"
        value={inputValue}
        onFocus={() => {
          setInputValue("");
          animationContext.disableInputFieldHandler(true);
          handleTyping();
        }}
        onChange={() => {}}
        className={animationContext.inputFieldTextClass.value}
      ></input>
    </div>
  );
};

export default InputFieldArea;
