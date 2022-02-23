//Initialization of default classes which will be changed during animation
export const mainContentClass = { value: "main-content" },
  renderAreaClass = { value: "render-area" },
  signatureClass = { value: "signature noselect" },
  buttonsWrapperClass = { value: "buttons-wrapper" },
  inputFieldTextClass = { value: "input-field-text" },
  setClassNames = (inputFieldStatus, typingStatus, currentLocation) => {
    //1st stage of animation
    if (inputFieldStatus === true) {
      mainContentClass.value = "main-content backgorund-white";
      renderAreaClass.value =
        "render-area visible flex-column render-area-height-transition";
      signatureClass.value = "hidden";
      //2nd stage of animation
      if (typingStatus === "done") {
        buttonsWrapperClass.value = "buttons-wrapper visible";
        mainContentClass.value =
          "main-content backgorund-white width-full-screen-transition";
        inputFieldTextClass.value = "hidden";

        if (currentLocation !== "/portfolio/") {
          signatureClass.value = "hidden";
          mainContentClass.value = "main-content width-full-screen-transition";
        }
      }
    }
  };
