import React from "react";
import NavBar from "./components/NavBar";
// import "../styles/app.less";
import LoginPage from "./components/LoginPage";
import { Route } from "react-router";

const App = ({ title }) => {
  return (
    <section className="main-section">
      <NavBar />
      <Route exact path="/login" component={LoginPage} />
    </section>
  );
};

export default App;
