import React, { useState, useEffect } from "react";
import { API } from "../api-service";
import { useCookies} from 'react-cookie'


function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ token, setToken ] = useCookies(['movie-token']);

  useEffect(() => {
    console.log(token);
    if (token['movie-token']) window.location.href = "/movies";
  }, [token]);

  const loginClicked = () => {
    API.loginUser({ username, password })
      .then((resp) => setToken('movie-token', resp.token))
      .catch((error) => console.log(error));
  };

  return (
    <div>
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
      <button onClick={loginClicked}>Login</button>
    </div>
  );
}

export default Auth;
