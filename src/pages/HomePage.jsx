import React from "react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className=" row mt-4 d-flex justify-content-between">
          <div className="col-lg-6 px-0 d-flex justify-content-center">
            <img className="img-fluid rounded-5" src="Sp.png" alt="" />
          </div>
          <div className="col-lg-6 px-0 mt-sm-5 px-sm-5 d-flex align-items-center">
            <p>
              "Share Post", benzersiz bir sosyal medya deneyimi sunan ve
              Instagram, Twitter, Facebook ve LinkedIn gibi popüler platformlara
              tek bir noktadan aynı anda içerik paylaşma imkanı sağlayan
              yenilikçi bir web sitesidir. Günümüzde sosyal medya kullanımının
              yaygınlaşmasıyla birlikte, kullanıcılar her platformda etkileşimde
              bulunmak istiyorlar. Share Post, bu ihtiyacı karşılamak üzere
              tasarlanmış, kullanıcı dostu ve çok yönlü bir platformdur.
              <h3>Öne Çıkan Özellikler:</h3>
              Tek Noktadan Yönetim: Share Post, Instagram, Twitter, Facebook ve
              LinkedIn hesaplarına tek bir yerden erişim sağlar. Kullanıcılar,
              aynı anda tüm platformlara içerik paylaşabilir ve hesaplarını
              etkileşimde tutabilirler. Hızlı ve Kolay Kullanım: Minimalist ve
              kullanıcı dostu arayüzü sayesinde, kullanıcılar içeriklerini hızlı
              bir şekilde paylaşabilir ve takipçi kitlesini genişletebilir.
              Zaman Tasarrufu: Aynı içeriği her platforma ayrı ayrı yazmak
              yerine, kullanıcılar tek bir paylaşım ile tüm sosyal medya
              hesaplarını güncelleyebilir, bu da zaman tasarrufu sağlar.
              Gelişmiş Analiz Araçları: Kullanıcılar, paylaşımlarının
              performansını izleyebilir ve analiz araçları sayesinde hedef
              kitlelerini daha iyi anlayabilirler.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
