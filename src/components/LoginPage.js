import React, { useEffect, useState } from "react";
import reduxStore from "../stores/reduxStore";

const LoginPage = (props) => {
  const [localStore, setLocalStore] = useState({});

  useEffect(() => {
    if (!localStore) {
      reduxStore.subscribe(() => {
        setLocalStore(localStore.getState());
      });
    }
    return unsubscribe;
  }, []);

  // Unsubcription method to avoid memory leak
  const unsubscribe = reduxStore.subscribe(() => {
    setLocalStore({});
  });

  const onSubmitLogin = (event) => {
    event.preventDefault();
    if (!localStore.loggedIn) {
      props.history.push(`/`); // redirect to homepage ones logged in
    }

    // Dispatch Login state of the user
    reduxStore.dispatch({
      type: "LOGIN_LOGOUT",
      payload: {
        loggedIn: localStore.loggedIn,
      },
    });
  };

  return (
    <div className="login-container-div">
      <form className="login-form" onSubmit={onSubmitLogin}>
        <div>
          <h1>Login</h1>
          <hr />
          <label>
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="eg. username@hotmail.com"
            name="email"
            id="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="password"
            name="psw"
            id="psw"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
          />
          <button type="submit" className="registerbtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
