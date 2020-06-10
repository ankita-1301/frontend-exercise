import React from "react";

const LoginPage = (props) => {
  return (
    <div className="login-container-div">
      <form className="login-form">
        <div class="login-container">
          <h1>Login</h1>
          <hr />
          <label for="email">
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
          <label for="psw">
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
          <button type="submit" class="registerbtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
