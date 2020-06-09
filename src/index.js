import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/app.less";
import HomePage from "./components/HomePage";
import { Route } from "react-router";

const title = "My Feel-Fresh Application";

render(
  <BrowserRouter>
    <App title={title} />
    <Route exact path="/" component={HomePage} />
  </BrowserRouter>,
  document.getElementById("app")
);

module.hot.accept();
