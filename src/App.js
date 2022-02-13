import React from "react";
import "./App.css";
import Messanger from "./modules/animated-messanger";
import MyProjects from "./modules/projects";
import { Route, Routes } from "react-router-dom";
import MySkills from "./modules/skills";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Messanger />} />
        <Route path="/projects" element={<MyProjects />} />{" "}
        <Route path="/skills" element={<MySkills />} />
      </Routes>
    </div>
  );
}

export default App;
