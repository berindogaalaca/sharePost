import React from "react";
import "../style.css";
import TextInput from "../components/TextInput";
import CheckBoxInput from "../components/CheckBoxInnput";
import Button from "../components/Button";
import ToLink from "../components/ToLink";
import Logo from "../components/Logo";

function Login() {
  const customStyle = {
    background:
      "linear-gradient(135deg, rgb(252, 207, 49) 10%, rgb(245, 85, 85) 100%)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const handleEmailChange = (e) => {
    console.log('Email changed:', e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log('Password changed:', e.target.value);
  };


  return (
    <div
      className="login template d-flex justify-content-center align-items-center vh-100"
      style={customStyle}
    >
      <div className="form_control p-5 rounded-5 bg-light bg-opacity-25">
        <form>
          <Logo logoClass="img-fluid" logoText="Giriş Yap" />
          <TextInput
            labelFor="email"
            labelText="E-mail"
            inputType="email"
            placeholder="E-mail Adresinizi Giriniz"
            onInputChange={handleEmailChange}
          />
          <TextInput
            labelFor="password"
            labelText="Şifre"
            inputType="password"
            placeholder="Şifrenizi Giriniz"
            onInputChange={handlePasswordChange}
          />
          <CheckBoxInput
            labelFor="check"
            labelText="Beni Hatırla"
            inputType="checkbox"
            inputClassName="custom-control custom-checkbox "
            labelClassName="custom-input-label px-1"
          />
          <Button btnClassName="btn btn-light" btnText="Giriş Yap" />
          <div className="row justify-content-between">
            <ToLink
              linkClassName="col-8 px-3"
              linkText=" Şifremi Unuttum"
              linkTo="/ForgetPassword"
            />
            <ToLink
              linkClassName="col-4 text-end pr-2"
              linkText="Hesap Oluşturun"
              linkTo="/signup"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
