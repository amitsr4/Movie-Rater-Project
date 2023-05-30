import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <h1> Movie Rater</h1>
        <div className="hiddenLinks">
          <Link to="/about"> About </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/about"> About </Link>
        <button onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
