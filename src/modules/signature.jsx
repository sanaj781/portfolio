import React, { useContext } from "react";
import "../css/signature.css";

import AnimationContext from "../Contexts/AnimationContext";
const SignatureArea = () => {
  const signatureClass = useContext(AnimationContext).signatureClass.value;
  return (
    <div className={signatureClass}>
      <span>
        Denys Shevchenko
        <br /> Portfolio Page
      </span>
    </div>
  );
};

export default SignatureArea;
