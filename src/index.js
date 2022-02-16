import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App2 from "./App2";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Test from "./test";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App2 />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
