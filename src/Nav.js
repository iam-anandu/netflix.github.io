import React, { useState, useEffect } from "react";
import "./nav.css";

function Nav() {
  const [show, handleShow] = useState([]);

  useEffect(() => {
    window.addEventListener("scroll", handleIt);
    function handleIt() {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    }

    return () => {
      window.removeEventListener("scroll", handleIt);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix-logo"
      />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix-avatar"
      />
    </div>
  );
}

export default Nav;
