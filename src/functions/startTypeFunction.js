export function startTyping(id, messages, setInputValue, setMessagesTyped) {
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
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
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
        startTyping(id, messages, setInputValue, setMessagesTyped);
      } else {
        setMessagesTyped(true);
      }
    }
  }, 40);
}