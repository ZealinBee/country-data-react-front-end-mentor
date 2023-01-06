import React, { useState, useEffect} from "react";
import "../styles/nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderStyle, faMoon } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(() => {
    const body = document.querySelector('body')
    if(darkMode) {
      body.classList.remove('dark')
    }else {
      body.classList.add('dark')
    }
  }, [darkMode])

  return (
    <nav>
      <h2>Where in the world?</h2>

      <button onClick={()=> setDarkMode(!darkMode)}>
      <FontAwesomeIcon icon={faMoon} /> <span>Dark Mode</span> 
      </button>
    </nav>
  );
}

export default Nav;
