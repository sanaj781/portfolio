import React from "react";
import { Route, Routes } from "react-router-dom";
import MyProjects from "../modules/projects";
import MainPage from "../modules/MainPage";
const MobileRenderArea = () => {
  return (
    <div className="render-area visible flex-column render-area-height-transition">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/projects" element={<MyProjects />} />
      </Routes>
    </div>
  );
};

export default MobileRenderArea;
