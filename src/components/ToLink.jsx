import React from 'react'
import { Link } from "react-router-dom";


function ToLink ({linkText,linkTo,linkClassName}){
  return (
    <div className={linkClassName}>
    <Link to={linkTo} style={{ color: "#000000" }}>
      {linkText}
    </Link>
  </div>
  )
}

export default ToLink