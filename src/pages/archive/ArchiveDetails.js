import React from "react";
import { useParams, Link } from "react-router-dom";
// Импортируем оба источника данных для сквозного поиска
import { experience, projectsHeader } from "../../portfolio";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./ArchiveDetails.css";

// ИСПРАВЛЕНИЕ: Добавили деструктуризацию onToggle прямо в аргументы функции
function ArchiveDetails({ theme, onToggle }) {
  const { id } = useParams();

  let item = null;

  // Вспомогательная функция для очистки строк от дефисов и регистра (защита от рассинхронизации)
  const cleanStr = (str) =>
    str ? str.toLowerCase().replace(/[-_]/g, "").trim() : "";

  const targetId = cleanStr(id);

  // 1. Поиск в разделах Хроники и Новостей
  if (experience && experience.sections) {
    experience.sections.forEach((section) => {
      const found = section.experiences.find(
        (x) =>
          cleanStr(x.id) === targetId ||
          cleanStr(x.title) === targetId ||
          cleanStr(encodeURIComponent(x.title)) === targetId
      );
      if (found) {
        item = found;
      }
    });
  }

  // 2. Если в Хронике ничего нет — ищем в Концертных программах (бывший Projects)
  if (!item && projectsHeader && projectsHeader.programs) {
    const foundProgram = projectsHeader.programs.find(
      (x) =>
        cleanStr(x.id) === targetId ||
        cleanStr(x.title) === targetId ||
        cleanStr(encodeURIComponent(x.title)) === targetId
    );
    if (foundProgram) {
      item = { ...foundProgram, type: "program" }; // Фиксируем тип для рендеринга репертуара
    }
  }

  // Защитный экран: если материала с таким ID не существует
  if (!item) {
    return (
      <div className="archive-details-main">
        <Header theme={theme} />
        <div className="archive-error-container" style={{ color: theme.text }}>
          <h2>Материал не найден</h2>
          <Link
            to="/projects" // При ошибке возвращаем на программы по умолчанию
            style={{ color: "#E4A834", textDecoration: "none" }}
          >
            ← Вернуться к концертным программам
          </Link>
        </div>
        <Footer theme={theme} onToggle={onToggle} />
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
                {item.news_date && (
                  <span
                    className="article-tag-date"
                    style={{ color: theme.secondaryText }}
                  >
                    📅 {item.news_date}
                  </span>
                )}
                {item.location && (
                  <span
                    className="article-tag-location"
                    style={{ color: theme.secondaryText }}
                  >
                    📍 {item.location}
                  </span>
                )}
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

              {/* 📰 АДАПТИВНЫЙ БЛОК II: Текстовые статьи / Новости / Развернутые описания */}
              {/* ИСПРАВЛЕНИЕ: Полностью убрали привязку к типу 'news'. Теперь fullStory выведется для любой карточки, если он заполнен */}
              {item.fullStory && (
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

              {/* Кнопка адаптивного возврата */}
              <Link
                to={item.type === "program" ? "/projects" : "/experience"}
                className="article-back-button"
                style={{ color: theme.text, borderColor: theme.text + "30" }}
              >
                {item.type === "program"
                  ? "← К концертным программам"
                  : "← Назад к хронике"}
              </Link>
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={theme} onToggle={onToggle} />
      <TopButton theme={theme} />
    </div>
  );
}

export default ArchiveDetails;
