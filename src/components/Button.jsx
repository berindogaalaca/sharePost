import React from 'react'
import { useNavigate } from 'react-router-dom'


function Button ({btnClassName, btnText, btnLink}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(btnLink);
  };
    return (
        <div className="mb-2 d-grid">
        <button className={btnClassName} onClick={handleClick}>
        
        {btnText}</button>
      </div>
      );
}

export default Button