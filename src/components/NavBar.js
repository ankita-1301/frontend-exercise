import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import reduxStore from "../stores/reduxStore";

const NavBar = () => {
  const [localStore, setLocalStore] = useState({});

  useEffect(() => {
    reduxStore.subscribe(() => {
      setLocalStore(reduxStore.getState());
    });

    return unsubscribe;
  }, [localStore]);

  const unsubscribe = reduxStore.subscribe(() => {
    // if necessary unsubscription code goes here!
    setLocalStore({});
  });

  const onClick = () => {
    if (localStore.loggedIn) {
      reduxStore.dispatch({
        type: "LOGIN_LOGOUT",
        payload: {
          loggedIn: localStore.loggedIn,
        },
      });
    }
  };

  return (
    <ul className="header">
      <li className="logo">
        <img
          className="hellofresh-logo"
          src="https://cdn.hellofresh.com/logo/HelloFresh_Logo_Horizontal_V2.svg"
          alt="HelloFresh"
        />
      </li>
      <li>
        <Link to={`/`}>Home</Link>
      </li>
      <li className="login-btn-li">
        <button className="right" onClick={onClick}>
          {!localStore.loggedIn ? <Link to={`/login`}>Login</Link> : "Logout"}
        </button>
      </li>
    </ul>
  );
};

export default NavBar;
