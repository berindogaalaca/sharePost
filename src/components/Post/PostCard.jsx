import React, { useState } from "react";
import "./post.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PostHeader from "./PostHeader";

function PostCard() {
  const [tekGonderi, setTekGonderi] = useState(false);
  const [birdenFazlaGonderi, setBirdenFazlaGonderi] = useState(false);
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleTekGonderiChange = () => {
    setTekGonderi(!tekGonderi);
    if (birdenFazlaGonderi) {
      setBirdenFazlaGonderi(false);
    }
  };

  const handleBirdenFazlaGonderiChange = () => {
    setBirdenFazlaGonderi(!birdenFazlaGonderi);
    if (tekGonderi) {
      setTekGonderi(false);
    }
  };

  const handleCheckboxChange = (checkboxId) => {
    setSelectedCheckbox(checkboxId);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderCardBody = () => {
    let cardBodyContent;
    let cardBodyStyle;

    if (selectedCheckbox === "checkbox1") {
      cardBodyStyle = { width: "100%", height: "540px", background: "gray" };
    } else if (selectedCheckbox === "checkbox2") {
      cardBodyStyle = { width: "100%", height: "283px", background: "gray" };
    } else if (selectedCheckbox === "checkbox3") {
      cardBodyStyle = { width: "448px", height: "540px", background: "gray" };
    } else {
      // Hiçbir checkbox seçilmediyse varsayılan içerik
      cardBodyContent = (
        <>
          <p className="card-text">Gönderinizin Boyutlarını Seçiniz</p>
        </>
      );
      cardBodyStyle = {};
    }

    return (
      <div className="card-body position-relative" style={cardBodyStyle}>
        {cardBodyContent}
        {selectedCheckbox && selectedImage && (
          <img
            src={selectedImage}
            alt="Seçilen Görsel"
            className="img-fluid"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        )}
        {selectedCheckbox && (
          <div className="custom-card d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">
            {/* Görsel Seç butonu */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ backgroundColor: "transparent", opacity: "0" }}
              className="position-absolute"
            />
            <button
              className="btn btn-primary"
              style={{ background: "white", color: "#343a40", borderColor:"white" }}
            >
              Görsel Seç
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="d-flex justify-content-center mt-3">
          Gönderi Sayısını Seçiniz
        </h2>
      </header>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6" style={{ height: "675px", width: "540px" }}>
            <div className="mb-3">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={tekGonderi}
                  onChange={handleTekGonderiChange}
                />
                Tek Gönderi
              </label>
            </div>
            <div className={`card ${birdenFazlaGonderi ? "blur" : ""}`}>
              <PostHeader/>
              <div className="card-body">
                {renderCardBody()}
                <div className="form-check form-check-inline mt-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="checkbox1"
                    checked={selectedCheckbox === "checkbox1"}
                    onChange={() => handleCheckboxChange("checkbox1")}
                  />
                  <label className="form-check-label" htmlFor="checkbox1">
                    Kare
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="checkbox2"
                    checked={selectedCheckbox === "checkbox2"}
                    onChange={() => handleCheckboxChange("checkbox2")}
                  />
                  <label className="form-check-label" htmlFor="checkbox2">
                    Yatay
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="checkbox3"
                    checked={selectedCheckbox === "checkbox3"}
                    onChange={() => handleCheckboxChange("checkbox3")}
                  />
                  <label className="form-check-label" htmlFor="checkbox3">
                    Dikey
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={birdenFazlaGonderi}
                  onChange={handleBirdenFazlaGonderiChange}
                />
                Birden Fazla Gönderi
              </label>
            </div>
            <div className={`card ${tekGonderi ? "blur" : ""}`}>
              <div className="card-body">
                <h5 className="card-title">Card 2 Başlığı</h5>
                <p className="card-text">Bu ikinci bir kart örneğidir.</p>
                <a href="#" className="btn btn-primary">
                  Detaylar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
