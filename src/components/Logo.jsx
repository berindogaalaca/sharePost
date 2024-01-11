import React from "react";

function Logo({logoClass,logoText}) {
  return (
    <div className="row justify-content-between mb-3">
      <div className="col-6 w-25">
        <img src="SpLogo2.png" alt="Logo" className={logoClass} />
      </div>
      <div className="col-6 d-flex justify-content-end align-items-center">
        <h3 className="text-end text-white">{logoText}</h3>
      </div>
    </div>
  );
}

export default Logo;
