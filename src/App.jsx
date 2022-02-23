import React, { useLayoutEffect, useState } from "react";
import "./App.css";
import "./css/additional-features.css";
import "./css/mediaqueries.css";
import { useLocation } from "react-router-dom";
import SignatureArea from "./modules/signature";
import InputFieldArea from "./modules/inputFieldArea";
import RenderArea from "./modules/renderArea";
import AnimationContext from "./Contexts/AnimationContext";
import { messages } from "./export-data/messages";
import {
  mainContentClass,
  renderAreaClass,
  signatureClass,
  buttonsWrapperClass,
  inputFieldTextClass,
  setClassNames,
} from "./functions/setClassNames";

const App = () => {
  const [allMessages, setAllMessages] = useState(messages);
  //For disabling an input field on focus
  const [inputFieldStatus, setinputFieldStatus] = useState(false);
  //For updating animation when all messages are typed
  const [typingStatus, settypingStatus] = useState(false);
  //Rendering content depends on window size
  const currentLocation = useLocation().pathname;
  //Updating state -adding class visible when message is typed
  const handleMessageClassChange = (newMessages) => {
    const messages = [...newMessages];
    setAllMessages(messages);
  };

  setClassNames(inputFieldStatus, typingStatus, currentLocation);
  return (
    <React.Fragment>
      <div className="app">
        <div className="main-content-wrapper">
          <div className={mainContentClass.value}>
            {/* Context for passing parameters needed for animation */}
            <AnimationContext.Provider
              value={{
                messages: allMessages,
                inputFieldStatus: inputFieldStatus,
                typeStatus: typingStatus,
                renderAreaClass: renderAreaClass,
                signatureClass: signatureClass,
                buttonsWrapperClass: buttonsWrapperClass,
                inputFieldTextClass: inputFieldTextClass,
                updateTypeStatusHandler: settypingStatus,
                disableInputFieldHandler: setinputFieldStatus,
                messageTypedHandler: handleMessageClassChange,
              }}
            >
              <RenderArea />
              <InputFieldArea />
              <SignatureArea />
            </AnimationContext.Provider>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
