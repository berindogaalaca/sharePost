// Signup.js

import React, { useState } from "react";
import "../style.css";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import ToLink from "../components/ToLink";
import Logo from "../components/Logo";

function Signup() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);

  const customStyle = {
    background:
      "linear-gradient(135deg, rgb(252, 207, 49) 10%, rgb(245, 85, 85) 100%)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    setPassword(inputValue);
  };

  const handlePasswordControl = (e) => {
    const inputValue = e.target.value;
    setConfirmPassword(inputValue);
  
    if (password && inputValue && password !== inputValue) {
      setPasswordError("Şifreler uyuşmuyor.");
    } else {
      setPasswordError(null);
    }
  };

  return (
    <div
      className="signup template d-flex justify-content-center align-items-center vh-100"
      style={customStyle}
    >
      <div className="form_control p-5 rounded-5 bg-light bg-opacity-25">
        <form>
          <Logo logoClass="img-fluid" logoText="Hesap Oluştur" />
          <TextInput
            labelFor="text"
            labelText="Adınız"
            inputType="text"
            placeholder="Adınızı Giriniz"
          />
          <TextInput
            labelFor="text"
            labelText="Soyadınız"
            inputType="text"
            placeholder="Soyadınızı Giriniz"
          />
          <TextInput
            labelFor="email"
            labelText="E-mail"
            inputType="email"
            placeholder="E-mail Adresinizi Giriniz"
          />
          <TextInput
            labelFor="password"
            labelText="Şifre"
            inputType="password"
            placeholder="Şifrenizi Giriniz"
            onInputChange={handlePasswordChange}
            inputName="password"
          />
          <TextInput
            labelFor="confirmPassword"
            labelText="Şifre Tekrarı"
            inputType="password"
            placeholder="Şifrenizi Tekrar Giriniz"
            onInputChange={handlePasswordControl}
            inputName="confirmPassword"
          />
          {passwordError && <div className="text-danger">{passwordError}</div>}
          <Button
            btnClassName="btn btn-light"
            btnText="Hesap Oluştur"
            btnLink="/"
            linkClass=""
          />
          <div className="text-end">
            <ToLink
              linkClassName="text-end pr-2"
              linkText="Zaten Bir Hesabım Var"
              linkTo="/"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
