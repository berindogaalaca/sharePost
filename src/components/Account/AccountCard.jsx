import React, { useState } from 'react';
import BtnChange from './BtnChange'
import TextInput from '../TextInput';


const AccountCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log('Mail Adresiniz', email);
    console.log('Şifre', password);
  };

  return (
    <div className="container mt-5 w-75 px-3">
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">Kullanıcı Adınızı ve Şifrenizi Giriniz</h5>
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
          <BtnChange btnText="Giriş Yap" onClick={handleLogin} />
        </div>
      </div>
    </div>
  )
}

export default AccountCard