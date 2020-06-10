import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./styles/app.less";

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("app")
);

module.hot.accept();
