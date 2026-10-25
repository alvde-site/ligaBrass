import React, { useState, useEffect } from "react";
import "./CookieConsent.css";

function CookieConsent({ theme }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем, давал ли пользователь согласие ранее
    const consent = localStorage.getItem("cookie-consent-accepted");
    if (!consent) {
      // Показываем окошко с небольшой задержкой для плавности
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent-accepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner-root">
      <div
        className="cookie-banner-container"
        style={{
          backgroundColor: "#242B3D", // Наш светлый графит из темы
          borderColor: "rgba(148, 163, 184, 0.18)",
          color: theme.text,
        }}
      >
        <div className="cookie-text-block">
          <span role="img" aria-label="cookie" className="cookie-emoji">
            🍪
          </span>
          <p
            className="cookie-description"
            style={{ color: theme.secondaryText }}
          >
            Мы используем технические файлы cookie и данные локального хранилища
            для обеспечения корректной работы интерфейса и навигации. Оставаясь
            на сайте, вы соглашаетесь с их использованием.
          </p>
        </div>
        <button
          className="cookie-accept-btn"
          onClick={handleAccept}
          style={{
            backgroundColor: "#E4A834", // Наш фирменный латунный
            color: "#0A0F1D", // Цвет глубокого фона для контраста букв
          }}
        >
          Принять
        </button>
      </div>
    </div>
  );
}

export default CookieConsent;
