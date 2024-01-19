import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AccountCard from "../components/Account/AccountCard";
import PostTop from "../components/Post/PostTop";
import Footer from "./Footer";


const Linkedin = () => {
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);
    const [selectedImageCount, setSelectedImageCount] = useState(0);
  
    const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
    };
  
    const handleImageUpload = (e) => {
      const files = e.target.files;
      if (files.length > 0) {
        const newImages = Array.from(files).map((file) =>
          URL.createObjectURL(file)
        );
        setImages((prevImages) => [...prevImages, ...newImages]);
        setSelectedImageCount(newImages.length);
      }
    };
  
    const handleImageRemove = (index) => {
      const removedImage = images[index];
      URL.revokeObjectURL(removedImage); // Bellekten serbest bırak
  
      const newImages = [...images];
      newImages.splice(index, 1);
      setImages(newImages);
      setSelectedImageCount(0); // Silindiğinde seçilen fotoğraf sayısını sıfırla
    };
  
  return (
    <div className="container-fluid px-0">
      <Navbar />
      <AccountCard />
      <PostTop
        text={description}
        images={images}
        maximage={"20"}
        handleDescriptionChange={handleDescriptionChange}
        handleImageUpload={handleImageUpload}
        handleImageRemove={handleImageRemove}
        textSpan={`Seçilen Fotoğraf ${images.length}`}
        btntext={"Paylaş"}
      />
      <Footer/>
    </div>
  )
}

export default Linkedin