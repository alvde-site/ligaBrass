import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./Opensource.css";
import { mediaPageData } from "../../portfolio.js";

class Opensource extends Component {
  render() {
    const theme = this.props.theme;
    const { videoList, photoList } = mediaPageData;

    return (
      <div className="opensource-main page__main">
        <Header theme={theme} />

        <div className="media-container">
          {/* Шапка страницы */}
          <Fade bottom duration={1000} distance="30px">
            <div className="media-header-div">
              <h1 className="media-heading-text" style={{ color: theme.text }}>
                Галерея и видео
              </h1>
              <p
                className="media-heading-subText"
                style={{ color: theme.secondaryText }}
              >
                Живые записи с выступлений, репортажи за кулисами и моменты
                творческой жизни квинтета.
              </p>
            </div>
          </Fade>

          {/* СЕКЦИЯ КОНЦЕРТНЫХ ВИДЕО (Плееры Rutube) */}
          <Fade bottom duration={1100} distance="30px">
            <div className="media-section">
              <h2 className="media-section-title" style={{ color: theme.text }}>
                Видео с концертов
              </h2>
              <div className="video-grid">
                {videoList.map((video, index) => (
                  <div
                    key={index}
                    className="video-card"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      borderColor: theme.secondaryText + "18",
                    }}
                  >
                    <div className="video-responsive-wrap">
                      {/* Правильный, безопасный адрес встраивания плеера */}
                      <iframe
                        src={"https://rutube.ru" + video.id}
                        frameBorder="0"
                        allow="clipboard-write; autoplay; encrypted-media; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={video.title}
                      ></iframe>
                    </div>
                    <p
                      className="video-card-title"
                      style={{ color: theme.text }}
                    >
                      {video.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Fade>

          {/* СЕКЦИЯ ФОТОГАЛЕРЕИ */}
          <Fade bottom duration={1200} distance="30px">
            <div className="media-section" style={{ marginTop: "60px" }}>
              <h2 className="media-section-title" style={{ color: theme.text }}>
                Фотогалерея
              </h2>
              <div className="photo-grid">
                {photoList.map((photo, index) => (
                  <div
                    key={index}
                    className="photo-card"
                    style={{ borderColor: theme.secondaryText + "15" }}
                  >
                    <img
                      src={require(`../../assets/images/${photo.src}`)}
                      alt={photo.alt}
                      className="gallery-img"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </div>

        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Opensource;
