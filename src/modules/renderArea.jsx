import React, { useContext } from "react";
import MyProjects from "./projects";
import MainPage from "./MainPage";
import { Routes, Route } from "react-router-dom";
import Messages from "./animatedMessanger";

import AnimationContext from "../Contexts/AnimationContext";
const RenderArea = () => {
  const RenderAreaClass = useContext(AnimationContext).renderAreaClass.value;

  return (
    <div className={RenderAreaClass}>
      <Routes>
        <Route path="/" element={<Messages />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default RenderArea;
