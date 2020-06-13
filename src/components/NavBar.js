import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userStore from "../stores/userStore";

const NavBar = () => {
  const [store, setUserStore] = useState({});

  useEffect(() => {
    userStore.subscribe(() => {
      setUserStore(userStore.getState());
    });

    return unsubscribe;
  }, [store]);

  const unsubscribe = userStore.subscribe(() => {
    console.log("Unsubscribed from the store of NavBar !!");
  });

  const onClick = () => {
    if (store.loggedIn) {
      userStore.dispatch({
        type: "LOGIN_LOGOUT",
        payload: {
          loggedIn: store.loggedIn,
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
      <li>
        <Link to={`/about`}>About</Link>
      </li>
      <li>
        <Link to={`/blog`}>Blog</Link>
      </li>
      <li>
        <Link to={`/career`}>Career</Link>
      </li>
      <li className="login-btn-li">
        <button className="right" onClick={onClick}>
          {!store.loggedIn ? <Link to={`/login`}>Login</Link> : "Logout"}
        </button>
      </li>
    </ul>
  );
};

export default NavBar;
