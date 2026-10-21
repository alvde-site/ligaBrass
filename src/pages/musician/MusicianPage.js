import React from "react";
import { useParams, Link } from "react-router-dom";
import { musiciansDetails } from "../../portfolio";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./MusicianPage.css"; // Стили создадим ниже

function MusicianPage({ theme }) {
  const { id } = useParams(); // Получаем 'bakharev', 'grinemayer' и т.д. из URL
  const artist = musiciansDetails[id];

  if (!artist) {
    return (
      <div>
        <Header theme={theme} />
        <div
          style={{ color: theme.text, textAlign: "center", padding: "100px" }}
        >
          <h2>Музыкант не найден</h2>
          <Link to="/about" style={{ color: "#E4A834" }}>
            Вернуться к составу
          </Link>
        </div>
        <Footer theme={theme} />
      </div>
    );
  }

  return (
    <div className="musician-page-main">
      <Header theme={theme} />
      <div className="musician-container">
        {/* Левая колонка: Фото и Соцсети */}
        <div className="musician-left">
          <img
            src={require(`../../assests/images/${artist.photo}`)}
            alt={artist.name}
            className="musician-photo"
          />
          <div className="musician-socials">
            {artist.vk && (
              <a
                href={artist.vk}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn vk-btn"
              >
                Профиль ВКонтакте
              </a>
            )}
            {artist.telegram && (
              <a
                href={artist.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn tg-btn"
              >
                Telegram-канал
              </a>
            )}
          </div>
        </div>

        {/* Правая колонка: Подробный текст */}
        <div className="musician-right" style={{ color: theme.text }}>
          <span className="musician-label" style={{ color: "#E4A834" }}>
            {artist.instrument}
          </span>
          <h1 className="musician-name">{artist.name}</h1>
          <div className="musician-bio">
            {artist.bio.map((paragraph, index) => (
              <p key={index} style={{ color: theme.secondaryText }}>
                {paragraph}
              </p>
            ))}
          </div>
          <Link
            to="/about"
            className="back-to-team"
            style={{ color: theme.text, border: `1px solid ${theme.text}` }}
          >
            ← Назад к составу
          </Link>
        </div>
      </div>
      <Footer theme={theme} />
    </div>
  );
}

export default MusicianPage;
