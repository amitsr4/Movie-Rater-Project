import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Auth from "./components/auth";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes, BrowserRouter } from "react-router-dom";

export const TokenContext = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));

function Router() {
const TOKEN = "9f5e580e5fa1e43b5a7a48941a7652c7246e1148";

  return (
    <React.StrictMode>
      <TokenContext.Provider value={TOKEN}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/movies" element={<App />} />
          </Routes>
        </BrowserRouter>
      </TokenContext.Provider>
    </React.StrictMode>
  );
}

root.render(<Router />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
