import React from "react";
import { useParams, Link } from "react-router-dom";
import { mediaPageData } from "../../portfolio";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./GalleryAlbum.css";

function GalleryAlbum({ theme }) {
  const { id } = useParams();

  // Ищем нужный альбом по его ID
  const currentAlbum = mediaPageData.albumList.find((album) => album.id === id);

  if (!currentAlbum) {
    return (
      <div className="gallery-album-main">
        <Header theme={theme} />
        <div className="album-error-container" style={{ color: theme.text }}>
          <h2>Альбом не найден</h2>
          <Link
            to="/opensource"
            style={{ color: "#E4A834", textDecoration: "none" }}
          >
            ← Вернуться в Медиагалерею
          </Link>
        </div>
        <Footer theme={theme} />
      </div>
    );
  }

  return (
    <div className="gallery-album-main page__main">
      <Header theme={theme} />
      <div className="album-container">
        {/* Шапка альбома */}
        <Fade bottom duration={1000} distance="20px">
          <div className="album-inner-header">
            <Link
              to="/opensource"
              className="album-nav-back"
              style={{ color: "#E4A834" }}
            >
              ← Назад в Галерею
            </Link>
            <h1 className="album-inner-title" style={{ color: theme.text }}>
              {currentAlbum.title}
            </h1>
            <p
              className="album-inner-desc"
              style={{ color: theme.secondaryText }}
            >
              {currentAlbum.description}
            </p>
          </div>
        </Fade>

        {/* Сетка всех фотографий внутри альбома */}
        <Fade bottom duration={1200} distance="30px">
          <div className="album-photos-grid">
            {currentAlbum.photos.map((photo, index) => (
              <div
                key={index}
                className="album-photo-card"
                style={{ borderColor: theme.secondaryText + "15" }}
              >
                <img
                  src={require(`../../assets/images/${photo.src}`)}
                  alt={photo.alt}
                  className="album-inner-img"
                  title={photo.alt}
                />
              </div>
            ))}
          </div>
        </Fade>
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}

export default GalleryAlbum;
