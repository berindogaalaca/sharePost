// BtnChange.js
import React from 'react';

const BtnChange = ({ btnText, onClick }) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {btnText}
    </button>
  );
};

export default BtnChange;
