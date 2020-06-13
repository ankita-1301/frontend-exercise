import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "../less/styles.less";
import store from "./stores/store";
import { Provider } from "react-redux";

render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("app")
);

module.hot.accept();
