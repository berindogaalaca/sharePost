import React, { useRef } from "react";
import {
  Card,
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import "./card.css";
import PostHeader from "./PostHeader";

const PostTop = ({
  text,
  images,
  handleDescriptionChange,
  handleImageUpload,
  handleImageRemove,
  textSpan,
  btntext,
  maximage
}) => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  // Referans oluştur
  const imageWrapperRef = useRef(null);

  // Resim oranlarını eşitle
  const equalizeImageRatios = () => {
    const imageWrapper = imageWrapperRef.current;
    if (!imageWrapper) return;

    const imageContainers = imageWrapper.querySelectorAll(".image-container");

    imageContainers.forEach((container) => {
      const imageWrapper = container.querySelector(".image-wrapper");
      const img = imageWrapper.querySelector("img");

      const targetWidth = 1024;
      const targetHeight = 512;

      const ratio = targetWidth / targetHeight;

      let newWidth = targetWidth;
      let newHeight = targetHeight;

      const imgRatio = img.width / img.height;

      if (imgRatio > ratio) {
        newWidth = targetHeight * imgRatio;
      } else {
        newHeight = targetWidth / imgRatio;
      }

      img.style.width = `${targetWidth}px`;
      img.style.height = `${targetHeight}px`;
    });
  };

  // Sayfa yüklendiğinde ve resimler değiştiğinde oranları eşitle
  React.useEffect(() => {
    equalizeImageRatios();
  }, [images]);

  return (
    <Card className="container my-5 w-75 shadow">
      <PostHeader/>
      <Card.Body>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Açıklamanızı Giriniz"
            value={text}
            onChange={handleDescriptionChange}
          />
        </InputGroup>

        <Row xs={1} sm={2} md={2} lg={3} xl={4} ref={imageWrapperRef} noGutters>
          {images.map((image, index) => (
            <Col key={index} className="mb-3 col">
              <div className="image-container">
                <div className="image-wrapper">
                  <img
                    onLoad={equalizeImageRatios}
                    src={image}
                    alt={`Fotoğraf ${index + 1}`}
                    className="img-fluid"
                  />
                </div>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleImageRemove(index)}
              >
                Sil
              </Button>
            </Col>
          ))}
        </Row>

        {images.length <maximage && (
          <InputGroup className="mb-3">
            <FormControl
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              multiple
            />
          </InputGroup>
        )}
        <Col>
          <span>{textSpan}</span>
        </Col>
        <Col className="col-6 offset-6 col-xs-10 col-xs-2 d-flex justify-content-end">
          <Button
            className="w-50 border-0"
            style={{ backgroundColor: "#F55555" }}
            onClick={handleButtonClick}
          >
            {btntext}
          </Button>
        </Col>
      </Card.Body>
    </Card>
  );
};

export default PostTop;
