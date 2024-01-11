import React, { useState } from "react";
import { Eye, EyeSlash } from "react-bootstrap-icons";

function TextInput({
  labelFor,
  labelText,
  inputType,
  placeholder,
  onInputChange,
  inputName,
}) {
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (labelFor === "text" && !/^[a-zA-Z]+$/.test(inputValue)) {
      setError("Sadece harf kullanabilirsiniz.");
    } else if (labelFor === "email" && !/\S+@\S+\.\S+/.test(inputValue)) {
      setError("Geçerli bir e-posta adresi giriniz.");
    } else if (
      labelFor === "password" &&
      (inputValue.length < 8 || inputValue.length > 16)
    ) {
      setError("Şifreniz 8 ila 16 karakter arasında olmalıdır.");
    } else {
      setError(null);
    }

    onInputChange && onInputChange(e);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-2">
      <label htmlFor={labelFor}>{labelText}</label>
      <div className="input-group">
        <input
          type={showPassword ? "text" : inputType}
          placeholder={placeholder}
          className={`form-control ${error ? "is-invalid" : ""}`}
          onChange={handleInputChange}
          name={inputName}
        />
        {inputType === "password" && (
          <span className="input-group-text" onClick={togglePasswordVisibility}>
            {showPassword ? <EyeSlash /> : <Eye />}
          </span>
        )}{" "}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
}

export default TextInput;
