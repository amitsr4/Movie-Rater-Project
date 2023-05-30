import React, { useState, useEffect } from "react";
import { API } from "../api-service";
import { useCookies } from "react-cookie";

function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginView, setIsLoginView] = useState(true);

  const [token, setToken] = useCookies(["movie-token"]);
  const isDisabled = username.length === 0 || password.length === 0;

  useEffect(() => {
    if (token["movie-token"]) window.location.href = "/movies";
  }, [token]);

  const loginClicked = () => {
    API.loginUser({ username, password })
      .then((resp) => {
        if (resp.token) {
          setToken("movie-token", resp.token);
        } else if (resp.status === 400) {
          resp.json().then((data) => {
            alert(data.non_field_errors);
          });
        } else if (resp.error) {
          alert(resp.error);
        } else {
          alert("No token received");
        }
      })
      .catch((error) => alert(error.message));
  };

  const registerClicked = () => {
    API.registerUser({ username, password })
      .then(() => loginClicked())
      .catch((error) => console.log(error));
  };
  return (
    <div className="App">
      <header className="App-header">
        {isLoginView ? <h1>Login</h1> : <h1>Register</h1>}
      </header>
      <div className="login-container">
        <label htmlFor="username">Username</label>
        <br />
        <input
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(evt) => setUsername(evt.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <form>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </form>
        <br />
        {isLoginView ? (
          <button onClick={loginClicked} disabled={isDisabled}>
            Login
          </button>
        ) : (
          <button onClick={registerClicked} disabled={isDisabled}>
            Register
          </button>
        )}
        {isLoginView ? (
          <p onClick={() => setIsLoginView(false)}>
            You don't have an account? <h3>Register here!</h3>
          </p>
        ) : (
          <p onClick={() => setIsLoginView(true)}>
            You already have an account? <h3>Login here!</h3>
          </p>
        )}
      </div>
    </div>
  );
}

export default Auth;
