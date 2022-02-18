import React from "react";
import avatar from "../imgs/avatar.jpg";

const Messages = (props) => {
  const { messages } = props;

  return (
    <React.Fragment>
      {messages.map((message) => (
        <div key={message.key} className={message.class}>
          <img src={avatar} alt="avatar" className="img-avatar" />

          <div className="message-info-text">
            <div className="message-top-line-wrapper">
              <div> Denys</div>
              <div>{message.date}</div>
            </div>
            <div>{message.message}</div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Messages;
