import React from "react";
import NavBar from "./components/NavBar";
import LoginPage from "./components/LoginPage";
import { Route, Switch } from "react-router";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
      <div class="footer">
        <p>Hello Fresh is the place to be!</p>
      </div>
    </div>
  );
};

export default App;
