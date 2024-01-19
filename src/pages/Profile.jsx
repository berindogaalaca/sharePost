import React, { useState } from "react";
import TextInput from "../components/TextInput";
import Navbar from "../components/Navbar";
import { useUserProfile } from './UserProfileContext';

const Profile = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);


  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleSaveProfilePicture = () => {
    console.log("Profil resmi kaydedildi:", profilePicture);

    if (profilePicture) {
      const imageUrl = URL.createObjectURL(profilePicture);
      localStorage.setItem("profilePicture", imageUrl);  // Save the image URL to localStorage
    }
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
  const handleChangePassword = () => {
    // Check if passwords match
    if (password === confirmPassword) {
      console.log("Yeni Şifre:", password);
    } else {
      console.error("Şifreler uyuşmuyor.");
    }
  };

  return (
    <div className="container-fluid px-0">
      <Navbar />
      <div className="d-flex justify-content-center mt-5">
        <div className="card shadow w-75">
        <div className="card-header">
            {/* Profile Picture Section */}
            <div className="mb-3">
              <label htmlFor="profilePicture" className="form-label">
                Profil Resmi Yükle
              </label>
              <input
                type="file"
                className="form-control"
                id="profilePicture"
                onChange={handleProfilePictureChange}
              />
            </div>
            {profilePicture && (
              <div className="mb-3">
                <label className="form-label">Profil Resmi</label>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    overflow: "hidden",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={URL.createObjectURL(profilePicture)}
                    alt="Profile"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            )}
            <button
              className="btn btn-primary mb-3"
              onClick={handleSaveProfilePicture}
            >
              Profil Resmini Değiştir
            </button>
          </div>
          <div className="card-body">
            <h5 className="card-title">Profil Sayfanız</h5>
            <TextInput
              labelFor="eskipassword"
              labelText="Eski Şifre"
              inputType="password"
              placeholder="Eski Şifrenizi Giriniz"
              inputName="password"
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
            {passwordError && (
              <div className="text-danger">{passwordError}</div>
            )}
            <button
              className="btn btn-primary mb-3"
              onClick={handleChangePassword}
            >
              Şifre Değiştir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
