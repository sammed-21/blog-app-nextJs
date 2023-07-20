"use client"

import React, { useContext } from "react";
 
import { ThemeContext } from "../../context/ThemeContext";


const DarkModeToggle = () => {
  const { toggle  }  = useContext(ThemeContext)
    return (
        <label className="switch-container" onClick={toggle} >
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
      
    )
}

export default DarkModeToggle
