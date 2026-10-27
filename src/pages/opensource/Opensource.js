import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import UniversalPlayer from "../../components/universalPlayer/UniversalPlayer";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom"; // Импортируем Link для переходов без перезагрузки
import "./Opensource.css";
import { mediaPageData } from "../../portfolio.js";

class Opensource extends Component {
  render() {
    const theme = this.props.theme;
    const { videoList, albumList } = mediaPageData;

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
                Живые записи с выступлений, репортажи из-за кулис и тематические
                фотоальбомы квинтета.
              </p>
            </div>
          </Fade>

          {/* СЕКЦИЯ КОНЦЕРТНЫХ ВИДЕО */}
          <Fade bottom duration={1100} distance="30px">
            <div className="media-section">
              <h2 className="media-section-title" style={{ color: theme.text }}>
                Видео с концертов
              </h2>
              <div className="video-grid">
                {videoList.map((video, index) => (
                  <UniversalPlayer
                    key={index}
                    theme={theme}
                    title={video.title}
                    videoUrl={video.url}
                  />
                ))}
              </div>
            </div>
          </Fade>

          {/* СЕКЦИЯ ТЕМАТИЧЕСКИХ АЛЬБОМОВ */}
          <Fade bottom duration={1200} distance="30px">
            <div className="media-section" style={{ marginTop: "60px" }}>
              <h2 className="media-section-title" style={{ color: theme.text }}>
                Фотоальбомы
              </h2>
              <div className="album-grid">
                {albumList.map((album, index) => (
                  <Link
                    key={index}
                    to={"/gallery/" + album.id}
                    className="album-card-link"
                  >
                    <div
                      className="album-spec-card"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        borderColor: theme.secondaryText + "18",
                      }}
                    >
                      <div className="album-cover-wrap">
                        <img
                          src={require(`../../assets/images/${album.cover}`)}
                          alt={album.title}
                          className="album-cover-img"
                        />
                        <div
                          className="album-overlay-badge"
                          style={{ backgroundColor: theme.body }}
                        >
                          Открыть альбом →
                        </div>
                      </div>
                      <div className="album-card-body">
                        <h3
                          className="album-card-title"
                          style={{ color: theme.text }}
                        >
                          {album.title}
                        </h3>
                        <p
                          className="album-card-desc"
                          style={{ color: theme.secondaryText }}
                        >
                          {album.description}
                        </p>
                      </div>
                    </div>
                  </Link>
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
