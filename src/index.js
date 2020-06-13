import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "../less/styles.less";
import userStore from "./stores/userStore";
import { Provider } from "react-redux";

render(
  <Provider store={userStore}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("app")
);

module.hot.accept();
