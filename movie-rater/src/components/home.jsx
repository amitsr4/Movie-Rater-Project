import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="home">
            <FontAwesomeIcon icon={faVideoCamera} fade />

      <div className="headerContainer">
        <h1> Movie Rater </h1>
        <p>EXPLORE THE BEST MOVIES</p>
        <Link to="/auth">
          <button> START</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
