import React from "react";

import MobileInputField from "./mobileInput";
import MobileRenderArea from "./mobileRenderArea";

const MobileComponent = () => {
  return (
    <React.Fragment>
      <div className="app">
        <div className="main-content-wrapper">
          <div className="main-content width-full-screen-transition">
            <MobileRenderArea />
            <MobileInputField />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileComponent;
