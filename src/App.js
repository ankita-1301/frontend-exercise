import React from "react";

const App = ({ title }) => {
  return (
    <section className="main-section">
      <section>
        <header className="nav-header">
          <span className="nav-section">
            <ul className="navigation">
              <a>
                <img
                  className="fela-_18vovew"
                  src="https://cdn.hellofresh.com/logo/HelloFresh_Logo_Horizontal_V2.svg"
                  alt="HelloFresh"
                  data-test-id="desktop-hellofresh-logo"
                />
              </a>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Demo</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <button>Login</button>
              </li>
            </ul>
          </span>
        </header>
      </section>
    </section>
  );
};

export default App;
