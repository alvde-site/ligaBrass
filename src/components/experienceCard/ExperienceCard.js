import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;

    // Безопасная проверка: если объект данных не передали, не рендерим ничего
    if (!experience) {
      return null;
    }

    return (
      <div className="experience-list-item">
        <Fade bottom duration={1000} distance="20px">
          <div
            className="news-card-container"
            style={{ borderColor: theme.secondaryText + "20" }}
          >
            {/* 1. Левая часть: Изображение/Обложка новости (С защитой от отсутствия картинки) */}
            {experience.logo_path ? (
              <div className="news-card-img-wrap">
                {/* <img
                  className="news-card-image"
                  src={require(`../../assets/images/${experience.logo_path}`)}
                  alt={experience.title || "Новость"}
                /> */}
              </div>
            ) : null}

            {/* 2. Правая часть: Контентная зона */}
            <div className="news-card-content-zone">
              {/* Верхняя строчка: Название и Мета-данные */}
              <div className="news-card-header-line">
                <div className="news-card-title-block">
                  {experience.title && (
                    <h3
                      className="news-card-main-title"
                      style={{ color: theme.text }}
                    >
                      {experience.title}
                    </h3>
                  )}

                  {experience.company && (
                    <p className="news-card-company-sub">
                      {experience.company_url ? (
                        <a
                          href={experience.company_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#E4A834" }}
                        >
                          {experience.company}
                        </a>
                      ) : (
                        <span style={{ color: theme.secondaryText }}>
                          {experience.company}
                        </span>
                      )}
                    </p>
                  )}
                </div>

                {/* Дата, длительность или локация события (Безопасный вывод) */}
                <div className="news-card-meta-block">
                  {experience.duration && (
                    <span
                      className="news-card-duration-tag"
                      style={{
                        color: theme.text,
                        backgroundColor: theme.secondaryText + "15",
                      }}
                    >
                      {experience.duration}
                    </span>
                  )}
                  {experience.location && (
                    <span
                      className="news-card-location-text"
                      style={{ color: theme.secondaryText }}
                    >
                      📍 {experience.location}
                    </span>
                  )}
                </div>
              </div>

              {/* Описание события / Текст новости */}
              {experience.description && (
                <div
                  className="news-card-body-text"
                  style={{ color: theme.secondaryText }}
                >
                  {experience.description}
                </div>
              )}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
