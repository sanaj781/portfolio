//Function's arguments should be 1 - array of messages
//2 - function for changing value of an input field
//3- function for showing typed message
//4 - function which change status of messages when they have been typed

export function typingMessages(
  messages,
  setInputValueFunction,
  updateMessages,
  updateTypingStatus
) {
  function startTyping(messageId) {
    //Clear input field
    let inputValue = "";
    //Function for swiping page to the bottom
    const swipeToBottom = function () {
      document
        .getElementsByClassName("input-field-wrapper")[0]
        .scrollIntoView({ behavior: "smooth" });
    };
    if (inputValue.length === 0) {
      //scrolling to the input field
      swipeToBottom();
    }
    //starting from the first symbol
    let symbolNumber = 0;
    //Spliting message into separate symbols for typing animation
    let messageSplittedBySymbols = messages[messageId].message.split("");

    let typingInterval = setInterval(() => {
      if (symbolNumber < messageSplittedBySymbols.length) {
        setInputValueFunction(
          (inputValue += messageSplittedBySymbols[symbolNumber])
        );
        symbolNumber++;
      } else {
        //getting a current date and time
        let date = new Date();
        const minutes =
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        messages[messageId].date =
          date.getDate() +
          " " +
          date.toLocaleString("default", { month: "long" }) +
          " " +
          date.getHours() +
          ":" +
          minutes;
        //clearing input field and setInterval values
        setInputValueFunction("");
        clearInterval(typingInterval);
        typingInterval = false;
        //Updating message class
        messages[messageId].class += " visible";
        updateMessages(messages);
        //scrolling to the last message - always keeps in focus
        document
          .getElementsByClassName("message-wrapper")
          [
            document.getElementsByClassName("message-wrapper").length - 1
          ].scrollIntoView({ behavior: "smooth", block: "center" });

        //Start typing next message
        messageId++;

        if (messageId < messages.length) startTyping(messageId);
        else {
          updateTypingStatus();
          //scrolling to bottom of a page when all messages are typed - for screens <
          setTimeout(() => swipeToBottom(), 1500);
        }
      }
    }, 40);
  }
  //start typing from the first message
  startTyping(0);
}
