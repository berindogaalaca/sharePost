import React from 'react'

function Button ({btnClassName, btnText}) {
    return (
        <div className="mb-2 d-grid">
        <button className={`${btnClassName}`}>{btnText}</button>
      </div>
      );
}

export default Button