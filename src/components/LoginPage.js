import React from "react";

const LoginPage = (props) => {
  const onSubmitLogin = (event) => {
    event.preventDefault();
    console.log("here");
    props.history.push(`/`);
  };
  return (
    <div className="login-container-div">
      <form className="login-form" onSubmit={onSubmitLogin}>
        <div className="login-container">
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
          <hr />
          <button type="submit" className="registerbtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
