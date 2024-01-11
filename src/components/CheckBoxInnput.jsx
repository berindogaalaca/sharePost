import React from "react";

function CheckBoxInput ({ labelFor, labelText, inputType, inputClassName,labelClassName }) {
  return (
    <div className="mb-2">
      <input
        type={inputType}
        className={inputClassName}
      />
      <label
        htmlFor={labelFor}
        className={labelClassName}
      >
        {labelText}
      </label>
    </div>
  );
};

export default CheckBoxInput;
