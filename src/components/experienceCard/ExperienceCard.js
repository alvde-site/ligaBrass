import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom"; // Импортируем Link для SPA-переходов

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;

    return (
      <div className="experience-list-item">
        <Fade bottom duration={1000} distance="20px">
          {/* Оборачиваем всю карточку в Link. Путь ведет на /archive/id-карточки */}
          <Link
            to={"/archive/" + experience.id}
            className="news-card-link-wrapper"
          >
            <div
              className="news-card-container"
              style={{ borderColor: theme.secondaryText + "20" }}
            >
              {/* Изображение/Обложка */}
              {experience["logo_path"] && (
                <div className="news-card-img-wrap">
                  <img
                    className="news-card-image"
                    src={require(`../../assets/images/${experience["logo_path"]}`)}
                    alt={experience["title"]}
                  />
                </div>
              )}

              {/* Контентная зона */}
              <div className="news-card-content-zone">
                <div className="news-card-header-line">
                  <div className="news-card-title-block">
                    <h3
                      className="news-card-main-title"
                      style={{ color: theme.text }}
                    >
                      {experience["title"]}
                    </h3>
                    {experience["company"] && (
                      <p
                        className="news-card-company-sub"
                        style={{ color: theme.secondaryText }}
                      >
                        {experience["company"]}
                      </p>
                    )}
                  </div>

                  <div className="news-card-meta-block">
                    {experience["duration"] && (
                      <span
                        className="news-card-duration-tag"
                        style={{
                          color: theme.text,
                          backgroundColor: theme.secondaryText + "15",
                        }}
                      >
                        {experience["duration"]}
                      </span>
                    )}
                    {experience["location"] && (
                      <span
                        className="news-card-location-text"
                        style={{ color: theme.secondaryText }}
                      >
                        📍 {experience["location"]}
                      </span>
                    )}
                  </div>
                </div>

                <div
                  className="news-card-body-text"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </div>
              </div>
            </div>
          </Link>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
