import React from "react";
import { useParams, Link } from "react-router-dom";
import { experience } from "../../portfolio";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./ArchiveDetails.css";

function ArchiveDetails({ theme }) {
  const { id } = useParams();

  let item = null;
  experience.sections.forEach((section) => {
    const found = section.experiences.find((x) => x.id === id);
    if (found) item = found;
  });

  if (!item) {
    return (
      <div className="archive-details-main">
        <Header theme={theme} />
        <div className="archive-error-container" style={{ color: theme.text }}>
          <h2>Материал не найден</h2>
          <Link
            to="/experience"
            style={{ color: "#E4A834", textDecoration: "none" }}
          >
            ← Вернуться к хронике и новостям
          </Link>
        </div>
        <Footer theme={theme} />
      </div>
    );
  }

  return (
    <div className="archive-details-main page__main">
      <Header theme={theme} />
      <div className="archive-details-container">
        <Fade bottom duration={1000} distance="30px">
          <div className="article-layout">
            {/* Левая колонка: Большая афиша / Постер события */}
            {item.poster && (
              <div className="article-sidebar">
                <img
                  src={require(`../../assets/images/${item.poster}`)}
                  alt={item.title}
                  className="article-poster-img"
                />
              </div>
            )}

            {/* Правая колонка: Основное развернутое содержание */}
            <div className="article-content" style={{ color: theme.text }}>
              <div className="article-meta-line">
                <span
                  className="article-tag-duration"
                  style={{
                    color: theme.text,
                    backgroundColor: theme.secondaryText + "15",
                  }}
                >
                  {item.duration}
                </span>
                <span
                  className="article-tag-location"
                  style={{ color: theme.secondaryText }}
                >
                  📍 {item.location}
                </span>
              </div>

              <h1 className="article-title">{item.title}</h1>
              <h3 className="article-subtitle" style={{ color: "#E4A834" }}>
                {item.company}
              </h3>

              <p
                className="article-lead-desc"
                style={{ color: theme.secondaryText }}
              >
                {item.description}
              </p>

              {/* 🎼 АДАПТИВНЫЙ БЛОК I: Концертная программа (Список произведений) */}
              {item.type === "program" && item.programList && (
                <div className="article-special-section">
                  <h4 className="section-inner-title">
                    Исполняемая программа:
                  </h4>
                  <ul className="music-repertoire-list">
                    {item.programList.map((track, idx) => (
                      <li key={idx} style={{ color: theme.secondaryText }}>
                        {track}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 📰 АДАПТИВНЫЙ БЛОК II: Новости и медиа (Абзацы текста) */}
              {item.type === "news" && item.fullStory && (
                <div className="article-special-section">
                  {item.fullStory.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="story-paragraph"
                      style={{ color: theme.secondaryText }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {/* 💬 АДАПТИВНЫЙ БЛОК III: Архив выступлений (Отзывы прессы и ректора) */}
              {item.type === "archive" && item.reviews && (
                <div className="article-special-section">
                  <h4 className="section-inner-title">Рецензии и отзывы:</h4>
                  <div className="reviews-stack">
                    {item.reviews.map((review, idx) => (
                      <blockquote
                        key={idx}
                        className="review-blockquote"
                        style={{ borderColor: theme.secondaryText + "30" }}
                      >
                        <p
                          className="review-text"
                          style={{ color: theme.text }}
                        >
                          {review.text}
                        </p>
                        <cite
                          className="review-author"
                          style={{ color: "#E4A834" }}
                        >
                          — {review.author}
                        </cite>
                      </blockquote>
                    ))}
                  </div>
                </div>
              )}

              <Link
                to="/experience"
                className="article-back-button"
                style={{ color: theme.text, borderColor: theme.text + "30" }}
              >
                ← Назад к хронике и новостям
              </Link>
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}

export default ArchiveDetails;
