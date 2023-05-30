import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Auth from "./components/auth";
import Home from "./components/home";
import About from "./components/about";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Navbar from "./components/navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Router() {
  return (
    <React.StrictMode>
      <CookiesProvider>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/movies" element={<App />} />
            <Route path="/about" element={<About />} />

          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </React.StrictMode>
  );
}

root.render(<Router />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
