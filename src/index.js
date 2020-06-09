import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/app.less";
const title = "My Feel-Fresh Application";

render(
  <BrowserRouter>
    <App title={title} />
  </BrowserRouter>,
  document.getElementById("app")
);

module.hot.accept();
