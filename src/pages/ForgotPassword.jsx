import React from 'react'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

function ForgotPassword () {
    const customStyle = {
        background:
          "linear-gradient(135deg, rgb(252, 207, 49) 10%, rgb(245, 85, 85) 100%)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      };
    const handleEmailChange = (e) => {
        console.log("Email changed:", e.target.value);
      };
  return (
    <div
      className="login template d-flex justify-content-center align-items-center vh-100"
      style={customStyle}
    >
        <div className="form_control p-5 rounded-5 bg-light bg-opacity-25">
        <form>
          <TextInput
            labelFor="email"
            labelText="E-mail"
            inputType="email"
            placeholder="Şifrenizi Sıfırlamak İçin Lütfen mail adresinizi giriniz"
            onInputChange={handleEmailChange}
          />
          <Button btnClassName="btn btn-light" btnText="Şifremi Sıfırla" btnLink="/" />
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword