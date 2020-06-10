import React from "react";
import NavBar from "./components/NavBar";
// import "../styles/app.less";
import LoginPage from "./components/LoginPage";
import { Route, Switch } from "react-router";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="home-page">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
